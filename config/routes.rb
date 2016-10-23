Rails.application.routes.draw do
  get '/' => 'contacts#index'

  namespace :api do
    namespace :v1 do
      get '/contacts' => 'contacts#index'
      post '/contacts' => 'contacts#create'
      get '/contacts/:id' => 'contacts#show'   
    end
  end
end
