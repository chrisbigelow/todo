import { connect } from 'react-redux';
import SubtaskListItem from './subtask_list_item';
// Actions
import { updateSubtask, destroySubtask } from '../actions/child_todo_actions';

const mapDispatchToProps = (dispatch, { s }) => ({
  destroyStep: () => dispatch(destroySubtask(s)),
  updateStep: updatedS => dispatch(updateSubtask(updatedS))
});

export default connect(
  null, // step prop is already passed in
  mapDispatchToProps
)(SubtaskListItem);