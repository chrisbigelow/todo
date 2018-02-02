import compact from 'lodash/compact';


export const allTodos = ( state ) => {
  let keys = Object.keys(state.todos);

  let rt_array = keys.map((key) => {
      return state.todos[key];
  });

  return rt_array;
};

export const subtasksByTodoId = ({ childTodos }, todo_id) => {
  const subsByTodoId = [];
  Object.keys(childTodos).forEach(stepId => {
    const step = childTodos[stepId];
    if (childTodos[stepId].task_id === todo_id) subsByTodoId.push(step)
  });
  return subsByTodoId;
};

