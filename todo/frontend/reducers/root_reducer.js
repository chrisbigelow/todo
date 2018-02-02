import { combineReducers } from 'redux';

import todosReducer from './todos_reducer';
import childTodosReducer from './child_todos_reducer';

const rootReducer = combineReducers({
  todos: todosReducer,
  childTodos: childTodosReducer
});

export default rootReducer;