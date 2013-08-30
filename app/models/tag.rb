class Tag < ActiveRecord::Base
  attr_accessible :topic, :gist_ids

  has_many :taggings

  has_many :gists, :through => :taggings, :source => :gist
end
