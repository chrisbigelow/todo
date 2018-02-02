Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :tasks, only: [:index, :show, :create, :destroy, :update] do
      resources :subtasks, only: [:index, :create]
    end

    resources :subtasks, only: [:destroy, :update]
  end
end
