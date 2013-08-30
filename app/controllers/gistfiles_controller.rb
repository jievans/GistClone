class GistfilesController < ApplicationController

  def index

  end

  def create
    gistfile = Gistfile.create!(params[:gistfile])
    render :json => gistfile
  end
end
