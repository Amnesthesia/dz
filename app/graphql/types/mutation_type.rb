# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
		field :createTransaction, mutation: Mutations::CreateTransaction
		field :updateFormTemplate, mutation: Mutations::UpdateFormTemplate
		field :updateRigInspection, mutation: Mutations::UpdateRigInspection
		field :createRigInspection, mutation: Mutations::CreateRigInspection
		field :updateDropzoneUser, mutation: Mutations::UpdateDropzoneUser
		field :updateRig, mutation: Mutations::UpdateRig
		field :createRig, mutation: Mutations::CreateRig
    field :updateExtra, mutation: Mutations::UpdateExtra
    field :createExtra, mutation: Mutations::CreateExtra
    field :updateUser, mutation: Mutations::UpdateUser
    field :deleteTicketType, mutation: Mutations::DeleteTicketType
    field :createTicketType, mutation: Mutations::CreateTicketType
    field :updateTicketType, mutation: Mutations::UpdateTicketType
    field :deleteLoad, mutation: Mutations::DeleteLoad
    field :createLoad, mutation: Mutations::CreateLoad
    field :updateLoad, mutation: Mutations::UpdateLoad
    field :deleteSlot, mutation: Mutations::DeleteSlot
    field :createSlot, mutation: Mutations::CreateSlot
    field :createSlots, mutation: Mutations::CreateSlots
    field :updateSlot, mutation: Mutations::UpdateSlot
    field :deletePlane, mutation: Mutations::DeletePlane
    field :createPlane, mutation: Mutations::CreatePlane
    field :updatePlane, mutation: Mutations::UpdatePlane
    field :deleteDropzone, mutation: Mutations::DeleteDropzone
    field :createDropzone, mutation: Mutations::CreateDropzone
    field :updateDropzone, mutation: Mutations::UpdateDropzone
    field :updateRole, mutation: Mutations::UpdateRole
  end
end
