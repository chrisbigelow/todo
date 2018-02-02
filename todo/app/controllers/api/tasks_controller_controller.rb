class Api::TasksControllerController < ApplicationController
  def index
    render json: Task.all
  end

  def show
    render json: Task.find(params[:id])
  end

  def create
    @task = task.new(task_params)
    if @task.save
      render json: @task
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = tasks.find(params[:id])
    @task.destroy
    render json: @task
  end

  private

  def task_params
    params.require(:task).permit(:title, :body, :done, :date)
  end
end
