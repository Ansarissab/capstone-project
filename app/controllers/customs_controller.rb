class CustomsController < ApplicationController
    # before_action :set_custom, only: %i[ show update destroy ]

  # POST /bucket_lists
  def create
    bucket_list = BucketList.create!(name: params[:name], user_id: session[:user_id])
    
    activity_bucket_list = ActivityBucketList.create!(activity_id: params[:activity_id], bucket_list_id: bucket_list.id)
    # render json: activity_bucket_list, status: :created, location: aactivity_bucket_list
    # render json: bucket_list, status: :created, location: bucket_list
  end


end