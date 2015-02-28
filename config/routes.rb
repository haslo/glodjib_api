Rails.application.routes.draw do

  root 'home#index'

  #devise_for :user, controllers: { sessions: 'devise_overrides/sessions' }

  namespace :v1 do
    # TODO
  end

end
