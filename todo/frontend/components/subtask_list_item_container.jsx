import { connect } from 'react-redux';
import SubtaskListItem from './subtask_list_item';
// Actions
import { updateSubtask, destroySubtask } from '../actions/child_todo_actions';
import { updateTodo } from '../actions/todo_actions';

const mapDispatchToProps = (dispatch, { subtask }) => ({
  destroySubtask: () => dispatch(destroySubtask(subtask)),
  updateSubtask: updatedSubtask => dispatch(updateSubtask(updatedSubtask)),
  updateTodo: t => dispatch(updateTodo(t))
});

export default connect(
  null,
  mapDispatchToProps
)(SubtaskListItem);