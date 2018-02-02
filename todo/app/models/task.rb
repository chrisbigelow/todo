class Task < ApplicationRecord

  NUMBER_OF_PERMITTED_SUBS = 2

  validates :done, inclusion: { in: [true, false] }
  validates :title, :body, :date, presence: true

  has_many :subtasks, before_add: :validate_sub_limit

  private

  def validate_sub_limit(subtask)
    raise Exception.new if :subtasks.size > NUMBER_OF_PERMITTED_SUBS
  end

end
