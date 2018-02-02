import { connect } from 'react-redux';
import TodoDrillView from './todo_drill_view';
import { deleteTodo } from '../actions/todo_actions';
import { requestSubtasks, createSubtask } from '../actions/child_todo_actions'; 
import { getChildren } from '../reducers/selectors';

const mapDispatchToProps = (dispatch, { todo }) => ({
  destroyTodo: () => dispatch(deleteTodo(todo)),
  requestSubtasks: () => dispatch(requestSubtasks(todo.id)),
  createSubtask: (t) => dispatch(createSubtask(t))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDrillView);