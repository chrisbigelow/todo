export const RECEIVE_CHILD_TODOS = "RECEIVE_CHILD_TODOS";
export const RECEIVE_CHILD_TODO = "RECEIVE_CHILD_TODO";
export const REMOVE_CHILD_TODO = "REMOVE_CHILD_TODO";
export const TODO_CHILD_ERROR = "TODO_CHILD_ERROR";

export const receiveChildTodos = todos => ({
  type: RECEIVE_CHILD_TODOS,
  todos
});

export const receiveChildTodo = todo => ({
  type: RECEIVE_CHILD_TODO,
  todo
});

export const removeChildTodo = todo => ({
  type: REMOVE_CHILD_TODO,
  todo
});

export const todoChildError = error => ({
  type: TODO_CHILD_ERROR,
  error
});