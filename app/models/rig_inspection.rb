# frozen_string_literal: true

class RigInspection < ApplicationRecord
  belongs_to :checklist
  belongs_to :inspected_by
  belongs_to :rig
end
