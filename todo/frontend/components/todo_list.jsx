import React from 'react';
import TodoListObject from './todo_list_object';
import TodoInput from './todo_input';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {

    const { todos, createTodo, errors, deleteTodo, updateTodo } = this.props;

    const todoItems = todos.map(todo => (
        <TodoListObject
          key={`todo-list-object${todo.id}`}
          todo={todo}
          deleteTodo={ deleteTodo }
          updateTodo= { updateTodo }
           />
      )
    );

    return(
      <div>
        <ul className="todo-list">
          { todoItems }
        </ul>
        <TodoInput createTodo={ createTodo }/>
      </div>
    );
  }
}

export default TodoList;