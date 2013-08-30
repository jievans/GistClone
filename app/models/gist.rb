class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  has_many :favorites, :class_name => "Favorite", :foreign_key => :gist_id,
  :primary_key => :id

  has_many :gistfiles, :class_name => "Gistfile", :foreign_key => :gist_id,
  :primary_key => :id

  accepts_nested_attributes_for :gistfiles
end
