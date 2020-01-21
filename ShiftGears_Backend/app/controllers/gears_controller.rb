class GearsController < ApplicationController

    def index
       @gears = Gear.all
        render json:@gears
    end

    def show
        @gear = Gear.find(prams[:id])
        render json: @gear
    end

    def update
        @gear = Gear.find(params[:id])
        if @gear.update(gear_params)
          render json: @gear
        else
          render json: {errors: "Invalid update"}
        end
    end

    private
    
    def gear_params
      params.permit(:name, :description, :price, :img_url)
    end
end
