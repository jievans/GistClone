class RootsController < ApplicationController

  def index
    @tags = Tag.all
  end
end