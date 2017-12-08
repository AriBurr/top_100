Rails.application.routes.draw do
  namespace :api do
    resources :songs, except: [:show]
  end

  get '*other', to: 'static#index'
end
