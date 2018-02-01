import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class TodoDrillView extends React.Component {
  render() {
    const { todo, removeTodo } = this.props;
    return(
      <div>
        <p className="todo-body">{ todo.body }</p>
        <RaisedButton label="Delete" onClick={ removeTodo } />
      </div>
    );
  }
}

export default TodoDrillView;