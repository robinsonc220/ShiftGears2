class UsersController < ApplicationController
    def index
        @users = User.all
         render json:@users
     end
     
     def show
         @user = User.find(prams[:id])
         render json: @user
     end
     
     def create
        @user = User.create(user_params)
        render json: @user
     end
     
     def update
         @user = User.find(params[:id])
         if @user.update(user_params)
           render json: @user
         else
           render json: {errors: "Invalid update"}
         end
     end
 
     private
     
     def user_params
       params.permit(:username, :password)
     end
end
