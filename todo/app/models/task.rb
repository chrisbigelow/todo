class Task < ApplicationRecord

  after_update :update_children

  NUMBER_OF_PERMITTED_SUBS = 2

  validates :done, inclusion: { in: [true, false] }
  validates :title, :body, :date, presence: true

  has_many :subtasks, before_add: :validate_sub_limit

  private

  def update_children
      self.subtasks.each do |task|
        task.update(done: !task.done)
      end
  end

  def validate_sub_limit(subtask)
    raise Exception.new if :subtasks.size > NUMBER_OF_PERMITTED_SUBS
  end

end
