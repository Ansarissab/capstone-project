class UsersController < ApplicationController
  #skip_before_action :authorize, only: :create

  
  # GET /users
  def index
    render json: User.all
  end
  
  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end
  
  # GET /users/1
  def show
    render json: @current_user, status: :ok
  end


  # DELETE /users/1
  # def destroy
  #   @user.destroy
  #   head :no_content
  # end

  private

    def user_params
      params.permit(:username, :password)
    end

end
