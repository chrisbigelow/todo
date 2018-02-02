class Api::SubtasksControllerController < ApplicationController
  def create
    subtask = Subtask.new(subtask_params)

    if subtask.save
      render json: subtask
    else
      render json: subtask.errors.full_messages, status: 422
    end
  end

  def index
    subtasks = Task.find(params[:todo_id]).subtasks
    render json: subtasks
  end

  def destroy
    subtask = Subtask.find(params[:id]).destroy
    render json: subtask
  end

  private
  def subtask_params
    params.require(:subtask).permit(:title, :done, :date, :body, :task_id)
  end
end
