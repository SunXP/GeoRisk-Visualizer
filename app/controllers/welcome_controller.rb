class WelcomeController < ApplicationController
  def index
    puts params[:id]
    @id = params[:id]
  end
end
