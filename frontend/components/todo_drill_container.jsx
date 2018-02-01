import { connect } from 'react-redux';
import TodoDrillView from './todo_drill_view';
import { removeTodo } from '../actions/todo_actions';

const mapDispatchToProps = (dispatch, { todo }) => ({
  removeTodo: () => dispatch(removeTodo(todo))
});

export default connect(
  null,
  mapDispatchToProps
)(TodoDrillView);