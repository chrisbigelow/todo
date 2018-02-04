import { connect } from 'react-redux';
import SubtaskListItem from './subtask_list_item';
// Actions
import { updateSubtask, destroySubtask } from '../actions/child_todo_actions';

const mapDispatchToProps = (dispatch, { subtask }) => ({
  destroySubtask: () => dispatch(destroySubtask(subtask)),
  updateSubtask: updatedSubtask => dispatch(updateSubtask(updatedSubtask))
});

export default connect(
  null, // step prop is already passed in
  mapDispatchToProps
)(SubtaskListItem);