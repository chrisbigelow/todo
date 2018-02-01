import React from 'react';
import TodoListObject from './todo_list_object';
// import TodoInput from './todo_input';

class TodoList extends React.Component {

  render() {

    const { todos, receiveTodo } = this.props;

    console.log(todos);

    const todoItems = todos.map(todo => (
        <TodoListObject
          key={`todo-list-object${todo.id}`}
          todo={todo}
          receiveTodo={ receiveTodo } />
      )
    );

    return(
      <div>
        <ul className="todo-list">
          { todoItems }
        </ul>
        {/* <TodoInput receiveTodo={ receiveTodo }/> */}
      </div>
    );
  }
}

export default TodoList;