module Mutations
  class SignUp < GraphqlDevise::Mutations::SignUp
    argument :phone, String, required: true
    argument :exit_weight, Float, required: true
    argument :name, String, required: true
    argument :license_id, Int, required: false

    field :authenticatable, Types::UserType, null: true
    field :errors, [String], null: true
    field :field_errors, [Types::FieldErrorType], null: true

    def resolve(email:, **attrs)
      original_payload = super
      original_payload.merge(
        authenticatable: original_payload[:authenticatable],
        errors: nil,
        field_errors: nil,
      )
    rescue ActiveRecord::RecordInvalid => invalid
      # Failed save, return the errors to the client
      {
        authenticatable: nil,
        credentials: nil,
        field_errors: invalid.record.errors.messages.map { |field, messages| { field: field, message: messages.first } },
        errors: invalid.record.errors.full_messages
      }
    rescue ActiveRecord::RecordNotSaved => error
      # Failed save, return the errors to the client
      {
        authenticatable: nil,
        credentials: nil,
        field_errors: nil,
        errors: invalid.record.errors.full_messages
      }
    rescue ActiveRecord::RecordNotFound => error
      {
        authenticatable: nil,
        credentials: nil,
        field_errors: nil,
        errors: [ error.message ]
      }
    end
  end
end