Rails.application.routes.draw do
  resources :notes, only: [:index, :show, :create, :edit, :destroy]
  resources :activity_bucket_lists
  resources :bucket_lists
  
  resources :activities, only: [:index, :show] 
  resources :likes, only: [:create, :destroy]
  
  resources :categories, only: [:index, :show]
  # resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'
  get '/users', to: 'users#index'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  get '/categories', to: 'categories#index'
  # post '/add-activity' to ''
  post '/login', to: 'sessions#create'
  delete '/signout', to: 'sessions#destroy'
  # delete '/deleteaccount', to: 'users#destroy'

  get '/user_bucket_lists', to: 'bucket_lists#user_bucket_lists'

end
