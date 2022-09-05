class BucketListsController < ApplicationController
   before_action :set_bucket_list, only: %i[ show update destroy ]
  #  before_action :set_user, only: [ :new, :create ]

  # GET /bucket_lists
  def index
    bucket_lists = BucketList.all

    render json: bucket_lists, status: :ok
  end

  def user_bucket_lists
    user = User.find(session[:user_id])
    render json: user.bucket_lists
  end

  # GET /bucket_lists/1
  def show
    render json: @bucket_list
  end

  # POST /bucket_lists
  def create
    @bucket_list =BucketList.new(name: params[:name], user_id: session[:user_id])
    puts "created"

    if @bucket_list.save
      render json: @bucket_list, status: :created, location: @bucket_list
      puts "new list created"
    else
      render json: @bucket_list.errors, status: :unprocessable_entity
      puts "list not created"

    end
  end

  # def create 
  #   if params[:bucket_list_id] == 0
  #     @bucketList = BucketList.create!(name: params[:bucket_list_name], user_id: session[:user.id])
  #   else
  #     @bucketList = BucketList.find(id: params[:bucket_list_id])
  #   end
  #   render json: @bucketList
  # end



  # PATCH/PUT /bucket_lists/1
  def update
    if @bucket_list.update(bucket_list_params)
      render json: @bucket_list
    else
      render json: @bucket_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bucket_lists/1
  def destroy
    @bucket_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_bucket_list
      @bucket_list = BucketList.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def bucket_list_params
      params.require(:bucket_list).permit(:user_id, :name)
    end
end
