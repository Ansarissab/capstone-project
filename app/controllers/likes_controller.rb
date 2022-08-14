class LikesController < ApplicationController
     before_action :set_likes, only: %i[ show update destroy ]

  # GET /bucket_lists
  def index
    @likes = Like.all

    render json: @likes
  end

  # GET /bucket_lists/1
  def show
    render json: @likes
  end

  # POST /bucket_lists
  def create
    @likes = Like.new(like_params)

    if @like.save
      render json: @like, status: :created, location: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bucket_lists/1
  def update
    if @like.update(like_params)
      render json: @like
    else
      render json: @like.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bucket_lists/1
  def destroy
    @like.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_like
      @like = like.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def like_params
      params.permit(:activity_id, :user_id, :likes)
    end
end

end
