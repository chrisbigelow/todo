class Subtask < ApplicationRecord

  validates :title, :body, :date, presence: true
  validates :done, inclusion: { in: [true, false] }

  # after_initialize { self.done = false if self.done.nil? }

  belongs_to :task

end
