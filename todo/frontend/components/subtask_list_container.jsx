import { connect } from 'react-redux';
import SubtaskList from './subtask_list';

import { subtasksByTodoId } from '../reducers/selectors';
import { createSubtask } from '../actions/child_todo_actions';

const mapStateToProps = (state, { todo_id }) => ({
  subtasks: subtasksByTodoId(state, todo_id),
  todo_id
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createSubtask: (...args) => dispatch(createSubtask(...args))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubtaskList);