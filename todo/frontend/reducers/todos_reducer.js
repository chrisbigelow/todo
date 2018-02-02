import { RECEIVE_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO,
  TODO_ERROR,
  RECEIVE_CHILD_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

// const initial_state = {
//     1: {
//       id: 1,
//       title: 'wash car',
//       body: 'with soap',
//       date: null,
//       done: false,
//       children: [3],
//       parent: null
//     },
//     2: {
//       id: 2,
//       title: 'wash dog',
//       body: 'with shampoo',
//       date: null,
//       done: true,
//       children: [],
//       parent: null
// }};

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    case REMOVE_TODO:
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    case TODO_ERROR:
      alert(action.error);
    default:
      return state;
   } 
};

export default todosReducer;
