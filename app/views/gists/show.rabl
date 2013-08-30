object @gist
attributes :id, :title

child(:gistfiles) do
  attributes :id, :body, :title
end

node(:favorite) do |gist|

  favorites_of_current_user = gist.favorites.select do |model|
    model.user_id == current_user.id
  end
  !(favorites_of_current_user.length == 0)
  # JSON.parse(gist.favorites.where(:user_id => current_user.id).to_json)
end

child(:gistfiles) do
  attributes :body, :title, :gist_id, :id
end