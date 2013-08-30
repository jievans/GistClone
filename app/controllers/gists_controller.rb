class GistsController < ApplicationController
  def index
     @gists = current_user.gists
    render "index.rabl"
  end

  def show
    @gist = Gist.find(params[:id])
    render "gists/show"
  end

  def make_favorite
    current_user.favorites.create!(:gist_id => params[:id])
    render :text => "Made Favorite"
  end

  def destroy_favorite
    favorite = Favorite.find_by_gist_id_and_user_id(params[:id],
                                                    current_user.id)
    favorite.destroy
    render :text => "Destroyed Favorite"
  end
end
