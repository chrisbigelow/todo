import { connect } from 'react-redux';
import TodoDrillView from './todo_drill_view';
import { removeTodo, receiveTodo } from '../actions/todo_actions';
import { receiveChildTodo } from '../actions/child_todo_actions'; 
import { getChildren } from '../reducers/selectors';

const mapDispatchToProps = (dispatch, { todo }) => ({
  removeTodo: () => dispatch(removeTodo(todo)),
  receiveChildTodo: () => dispatch(receiveChildTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDrillView);