# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(:username => "Jack", :password => "password")
Gist.create!(:title => "GE is great!", :user_id => 1)
Gist.create!(:title => "GE is too cool!", :user_id => 1)
Favorite.create!(:user_id => 1, :gist_id => 1)
Favorite.create!(:user_id => 1, :gist_id => 2)


Gistfile.create!(:name => "Sweet", :body => "the best gistfile",
                 :gist_id => 1)

Tag.create!(:topic => "Capitalist propaganda", :gist_ids => [1])
Tag.create!(:topic => "Hippie Language", :gist_ids => [2])
