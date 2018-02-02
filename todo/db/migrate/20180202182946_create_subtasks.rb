class CreateSubtasks < ActiveRecord::Migration[5.1]
  def change
    create_table :subtasks do |t|
      t.string :title
      t.string :date
      t.boolean :done
      t.text :body
      t.integer :task_id

      t.timestamps
    end
  end
end
