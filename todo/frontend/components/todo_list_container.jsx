import { connect } from 'react-redux';
import TodoList from './todo_list';
import { fetchTodos, createTodo, deleteTodo, updateTodo } from '../actions/todo_actions';
import { allTodos } from '../reducers/selectors';
import { requestSubtasks, createSubtask } from '../actions/child_todo_actions'; 

const mapStateToProps = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  destroyTodo: todo => dispatch(deleteTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  requestSubtasks: todo => dispatch(requestSubtasks(todo.id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);