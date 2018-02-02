import * as SubtaskAPIUtil from '../util/subtask_api_util';

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

export const requestSubtasks = todoId => dispatch => (
  SubtaskAPIUtil.fetchSubtasks(todoId)
  .then(subs => dispatch(receiveChildTodos(subs)))
);

export const createSubtask = (todoId, subtask) => dispatch => (
  SubtaskAPIUtil.createSubtask(todoId, subtask)
  .then(sub => dispatch(receiveChildTodo(sub)))
);

export const destroySubtask = subtask => dispatch => (
  SubtaskAPIUtil.destroySubtask(subtask)
  .then(sub => dispatch(removeChildTodo(sub)))
);

export const updateSubtask = s => dispatch => (
  SubtaskAPIUtil.updateStep(s)
  .then(st => dispatch(receiveChildTodo(st)))
);