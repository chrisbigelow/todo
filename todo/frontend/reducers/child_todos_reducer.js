import { RECEIVE_CHILD_TODO, RECEIVE_CHILD_TODOS,REMOVE_CHILD_TODO,TODO_CHILD_ERROR } from '../actions/child_todo_actions';
import merge from 'lodash/merge';

// const initial_state = {
//     id: 3,
//     title: 'child',
//     body: 'i am a child',
//     date: null,
//     done: true,
//     children: [],
//     parent: 1,
// };


const childTodosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_CHILD_TODOS:
      nextState = {};
      action.todos.forEach(todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_CHILD_TODO:
      const newTodo = {[action.todo.id]: action.todo};
      return merge({}, state, newTodo);
    case REMOVE_CHILD_TODO:
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    case TODO_CHILD_ERROR:
      alert(action.error);
    default:
      return state;
   } 
};

export default childTodosReducer;