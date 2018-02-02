import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TodoInputChild from './todo_input_child';

class TodoDrillView extends React.Component {
  render() {
    const { todo, removeTodo, receiveChildTodo } = this.props;

    return(
      <div>
        <p className="todo-body">{ todo.body }</p>
        <RaisedButton label="Delete" onClick={ removeTodo } />
        <TodoInputChild receiveTodo={ receiveChildTodo } todo={todo}/>
      </div>
    );
  }
}

export default TodoDrillView;