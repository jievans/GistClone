class GistsController < ApplicationController
  def index
    render :json => current_user.gists
  end
end
