export const fetchTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/tasks'
  })
);

export const fetchTodo = id => (
  $.ajax({
    method: 'GET',
    url: `/api/tasks/${id}`,
  })
);

export const createTodo = task => (
 $.ajax({
    method: 'POST',
    url: '/api/tasks',
    data: {task : task.todo}
  })
);

export const destroyTodo = task => (
  $.ajax({
    method: 'DELETE',
    url: `api/tasks/${task.id}`
  })
);

export const updateTodo = task => (
  $.ajax({
    method: 'PATCH',
    url: `/api/tasks/${task.id}`,
    data: { task }
  })
);