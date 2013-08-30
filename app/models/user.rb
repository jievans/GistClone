# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string(255)
#  password_digest :string(255)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'bcrypt'

class User < ActiveRecord::Base
  attr_accessible :password, :username
  attr_reader :password

  validates :username, :password_digest, :presence => true
  validates :password, :length => { :minimum => 3 }

  has_many :gists, :class_name => "Gist",
  :foreign_key => :user_id, :primary_key => :id

  has_many :favorites, :class_name => "Favorite",
  :foreign_key => :user_id, :primary_key => :id

  def password
    @password || self.password_digest
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def verify_password(password)
    BCrypt::Password.new(self.password_digest) == password
  end
end
