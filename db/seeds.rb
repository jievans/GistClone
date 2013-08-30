# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(:username => "Jack", :password => "password")
User.create!(:username => "Debbie", :password => "password")
Gist.create!(:title => "GE is great!", :user_id => 1)
Favorite.create!(:user_id => 1, :gist_id => 1)
Gist.create!(:title => "Cool Cool Cool!", :user_id => 2)
Favorite.create!(:user_id => 1, :gist_id => 2)
Gist.create!(:title => "GE is too cool!", :user_id => 1)
