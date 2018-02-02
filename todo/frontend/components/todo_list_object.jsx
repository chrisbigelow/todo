import React from 'react';
// import TodoDetailViewContainer from './todo_detail_view_container';
import TodoDrillContainer from './todo_drill_container';
import merge from 'lodash/merge';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class TodoListObject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {detail: false};
    this.selectTodo = this.selectTodo.bind(this);
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  selectTodo(e) {
    e.preventDefault();
    const toggledTodo = merge({}, this.props.todo, {
       done: !this.props.todo.done
     });
     this.props.updateTodo(toggledTodo);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  render() {

    const { todo, updateTodo, deleteTodo } = this.props;
    const { title, done } = todo;
    
    let drilled  = <TodoDrillContainer todo={ todo } />;

    return(



      <li class="task-item">
        <Card>
          {/* <div className="header-task">
            <h3><a onClick={ this.toggleDetail }>{ title }</a></h3>
          </div> */}
        <CardHeader
         title={title}
         expanded= {this.state.detail}
         actAsExpander={true}
         showExpandableButton={true}
         onExpandChange={ this.toggleDetail }
        />
        <CardActions>
          <Checkbox
              checked={done}
              onCheck={this.selectTodo.bind(this)}
            />
        </CardActions>
        <CardText expandable={ true } >
          { drilled }
        </CardText>
        </Card>
      </li>

    );
  }

}


export default TodoListObject;
