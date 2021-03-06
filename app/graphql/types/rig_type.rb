# frozen_string_literal: true

module Types
  class RigType < Types::BaseObject
    field :id, GraphQL::Types::ID, null: false
    field :make, String, null: true
    field :model, String, null: true
    field :serial, String, null: true
    field :canopy_size, Int, null: true
    field :pack_value, Int, null: true
    field :rig_type, String, null: true
    field :repack_expires_at, Int, null: true
    field :maintained_at, Int, null: true
    field :created_at, Int, null: false
    field :updated_at, Int, null: false
    field :dropzone, Types::DropzoneType, null: true
    field :user, Types::UserType, null: true
  end
end
