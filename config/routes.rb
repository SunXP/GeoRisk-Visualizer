Rails.application.routes.draw do
  get 'parse/:id/', to: 'parse#index'
  match 'parse/:id/' => 'parse#index', via: :post
  #get 'welcome/:id/', to: 'welcome#index'
  root 'welcome#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
