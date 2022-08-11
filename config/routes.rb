Rails.application.routes.draw do
  resources :activity_bucket_lists
  resources :bucket_lists
  resources :likes
  resources :activities
  resources :categories
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "/hello", to: "application#hello_world"
end
