SessionsTemplate::Application.routes.draw do
  resources :users, :only => [:new, :create, :show]
  resource :session, :only => [:new, :create, :destroy]
  resources :roots, :only => [:index]
  resources :gists

 # root :to => "users#new"
  root :to => "roots#index"
end
