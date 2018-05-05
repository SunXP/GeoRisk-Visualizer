class ParseController < ApplicationController
  def index
  end

  def parse
    puts params[:name]
    respond_to do |format|
      msg = {
        :status => "ok",
        :message => "Success!",
        :html => "<b>...</b>",
        :mapData => {
          :geoJson => params[:name]
        }
      }
      format.json  { render :json => msg }
    end
  end
end
