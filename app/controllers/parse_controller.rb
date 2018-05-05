class ParseController < ApplicationController
  def index
    puts params[:id]
    @id = params[:id]
    respond_to do |format|
      msg = { :status => "ok", :message => "Success!", :html => "<b>...</b>" }
      format.json  { render :json => msg }
    end
  end
end
