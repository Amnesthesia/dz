# frozen_string_literal: true

module Types
  class SlotExtraType < Types::BaseObject
    field :id, GraphQL::Types::ID, null: false
    field :created_at, Int, null: false
    field :updated_at, Int, null: false
  end
end
