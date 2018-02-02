import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SubtaskListContainer from './subtask_list_container';

class TodoDrillView extends React.Component {

  componentDidMount() {
    this.props.requestSubtasks();
  }

  render() {
    const { todo, destroyTodo, createSubtask } = this.props;

    return(
      <div>
        <p className="todo-body">{ todo.body }</p>
        <RaisedButton label="Delete" onClick={ destroyTodo } />
        <SubtaskListContainer todo_id={todo.id} />
        {/* <TodoInputChild createSubtask={ createSubtask } todo={todo}/> */}
      </div>
    );
  }
}

export default TodoDrillView;