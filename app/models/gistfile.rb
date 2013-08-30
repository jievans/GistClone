class Gistfile < ActiveRecord::Base
  attr_accessible :body, :name, :gist_id
end
