class JobPostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  # GET /job_posts
  def index
    @posts = JobPost.all
    render json: @posts
  end

  # GET /job_posts/1
  def show
    render json: @post
  end

  # POST /job_posts
  def create
    @post = JobPost.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /job_posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /job_posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = JobPost.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:job_post).permit(:title, :company_name, :location, :skills, :summary, :salary, :date_created, :job_type)
    end
end
