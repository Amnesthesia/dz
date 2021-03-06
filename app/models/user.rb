# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  provider               :string           default("email"), not null
#  uid                    :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  allow_password_change  :boolean          default(FALSE)
#  remember_created_at    :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string
#  last_sign_in_ip        :string
#  name                   :string
#  nickname               :string
#  image                  :string
#  phone                  :string
#  email                  :string
#  exit_weight            :float
#  license_id             :integer
#  tokens                 :text
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
class User < ApplicationRecord
  include CloudinaryHelper

  # Include default devise modules.
  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :trackable, :validatable
  include GraphqlDevise::Concerns::Model
  include DeviseTokenAuth::Concerns::User

  mount_base64_uploader :image, AvatarUploader, file_name: -> (u) { "avatar-#{u.id}-#{Time.current.to_i}.png" }

  has_many :rigs
  has_many :packs
  has_many :dropzone_users
  has_many :dropzones, through: :dropzone_users
  has_many :slots
  has_many :loads, through: :slots
  has_many :user_roles, through: :dropzone_users

  belongs_to :license, optional: true
  has_many :licensed_jump_types, through: :license, source: :licensed_jump_types
  has_many :jump_types, through: :licensed_jump_types, source: :jump_type



  def can?(permission_name, dropzone_id:)
    Permission.includes(
      user_role: :dropzone_users
    ).where(
      user_roles: {
        dropzone_users: {
          user_id: id,
          dropzone_id: dropzone_id
          }
        }
    ).exists?(name: permission_name)
  end

  def self.create_fake
    random_user, = JSON.parse(
      open("https://randomuser.me/api/").read,
      symbolize_names: true
    )[:results]

    user = User.create(
      name: "#{random_user[:name][:first]} #{random_user[:name][:last]}",
      email: random_user[:email],
      phone: random_user[:phone],
      password: random_user[:login][:password],
      exit_weight: ((Random.rand * 100) % 50) + 50,
    )

    user.image = "data:image/jpeg;base64,#{Base64.encode64(open(random_user[:picture][:medium]).read)}"
    user.save(validate: false)
    user
  end
end
