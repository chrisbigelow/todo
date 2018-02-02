# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

task0 = Task.create!(
  date: "9-10-2018",
  title: 'Pass all the assessments',
  body: 'I am capable of crushing every assessment if I study enough',
  done: false
)

subtask01 = Subtask.create!(
  date: "5-3-2018",
  title: 'A01',
  body: 'study all the ruby things',
  task_id: task0.id,
  done: false
)
subtask02 = Subtask.create!(
  date: "1-10-2018",
  title: 'A02',
  body: 'play cards, with the power of code',
  task_id: task0.id,
  done: false
)

task1 = Task.create!(
  date: "10-10-2018",
  title: 'Get a job',
  body: 'I will become employed',
  done: false
)
subtask11 = Subtask.create!(
  date: "1-11-2018",
  title: 'Prepare job search materials',
  body: 'I will make beautiful and awe-inspiring portfolio pieces',
  task_id: task1.id,
  done: false
)

task2 = Task.create!(
  date: "9-19-2018",
  title: 'Maintain personal hygiene',
  body: 'I want to be a sparkling human',
  done: false
)