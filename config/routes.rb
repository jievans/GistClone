SessionsTemplate::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]
  resources :roots, :only => [:index]
  resources :gists do
    member do
      post "favorite", :to => "gists#make_favorite"
      delete "favorite", :to => "gists#destroy_favorite"
    end
  end

  root :to => "roots#index"
end
