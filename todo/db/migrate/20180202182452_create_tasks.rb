class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :date
      t.boolean :done
      t.text :body

      t.timestamps
    end
  end
end
