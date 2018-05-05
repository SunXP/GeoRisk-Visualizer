Rails.application.routes.draw do
  get 'parse/:id/', to: 'parse#index'
  match 'parse/' => 'parse#parse', via: :post
  #get 'welcome/:id/', to: 'welcome#index'
  root 'welcome#index'
end
