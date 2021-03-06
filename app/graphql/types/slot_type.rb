# frozen_string_literal: true

module Types
  class SlotType < Types::BaseObject
    field :id, GraphQL::Types::ID, null: false
    field :created_at, Int, null: false
    field :created_at, Int, null: false
    field :exit_weight, Int, null: false
    def exit_weight
      object.exit_weight.to_i
    end
    field :group_number, Int, null: false

    field :user, Types::UserType, null: true
    def user
      object.user || object.passenger
    end

    field :ticket_type, Types::TicketTypeType, null: true
    field :load, Types::LoadType, null: false
    field :rig, Types::RigType, null: true
    field :jump_type, Types::JumpTypeType, null: true
    field :wing_loading, Float, null: true

    field :passenger_name, String, null: true
    def passenger_name
      object.passenger_slot.passenger.name if object.passenger_slot.present?
    end

    field :passenger_exit_weight, Float, null: true
    def passenger_exit_weight
      object.passenger_slot.exit_weight if object.passenger_slot.present?
    end

    field :extras, [Types::ExtraType], null: true
  end
end
