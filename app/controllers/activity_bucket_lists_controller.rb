class ActivityBucketListsController < ApplicationController
  before_action :set_activity_bucket_list, only: %i[ show update destroy ]

  # GET /activity_bucket_lists
  def index
    @activity_bucket_lists = ActivityBucketList.all

    render json: @activity_bucket_lists
  end

  # GET /activity_bucket_lists/1
  def show
    render json: @activity_bucket_list
  end

  # POST /activity_bucket_lists
  def create
    @activity_bucket_list = ActivityBucketList.new(activity_bucket_list_params)

    if @activity_bucket_list.save
      render json: @activity_bucket_list, status: :created, location: @activity_bucket_list
    else
      render json: @activity_bucket_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /activity_bucket_lists/1
  def update
    if @activity_bucket_list.update(activity_bucket_list_params)
      render json: @activity_bucket_list
    else
      render json: @activity_bucket_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /activity_bucket_lists/1
  def destroy
    @activity_bucket_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activity_bucket_list
      @activity_bucket_list = ActivityBucketList.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def activity_bucket_list_params
      params.permit(:activity_id, :bucket_list_id)
    end
end
