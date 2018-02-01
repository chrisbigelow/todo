import React from 'react';
// import TodoDetailViewContainer from './todo_detail_view_container';
import TodoDrillContainer from './todo_drill_container';
import merge from 'lodash/merge';
import Checkbox from 'material-ui/Checkbox';

class TodoListObject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {detail: false};
    this.selectTodo = this.selectTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  selectTodo(e) {
    e.preventDefault();
    const selectedTodo = merge(
      {},
      this.props.todo,
      { done: !this.props.todo.done }
    );

     this.props.receiveTodo(selectedTodo);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  render() {

    const { todo } = this.props;
    const { title, done } = todo;
    let drilled;
    if (this.state.detail) {
      console.log("print out full");
      drilled  = <TodoDrillContainer todo={ todo } />;
    }

    return(



      <li>
        <div className="header-task">
          <h3><a onClick={ this.toggleDetail }>{ title }</a></h3>
          <Checkbox
            checked={done}
            onCheck={this.selectTodo.bind(this)}
          />
        </div>
        { drilled }
      </li>

    );
  }

}


export default TodoListObject;
