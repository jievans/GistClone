object @gist
attributes :id, :title

node(:favorite) do |gist|
  !gist.favorites.where(:user_id => current_user.id).empty?
  # JSON.parse(gist.favorites.where(:user_id => current_user.id).to_json)
end