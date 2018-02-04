import React from 'react';
// import TodoDetailViewContainer from './todo_detail_view_container';
import TodoDrillContainer from './todo_drill_container';
import merge from 'lodash/merge';
import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {red500} from 'material-ui/styles/colors';

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

    const { todo, updateTodo, destroyTodo } = this.props;
    const { title, done, date } = todo;
    
    let drilled  = <TodoDrillContainer todo={ todo } />;
    let dateTwo = new Date(date);

    let card = 
    <Card>
    <CardHeader
     title={title}
     actAsExpander={true}
     showExpandableButton={true}>
     Due Date:{"\t" + dateTwo.toDateString()}
    </CardHeader>
    <CardActions>
      <Checkbox checked={done} onCheck={this.selectTodo.bind(this)}/>
    </CardActions>
    <CardText expandable={ true } >
      { drilled }
    </CardText>
    </Card>;


    if (dateTwo.getTime() < Date.now()) {

      card =
      <Card>
      <CardHeader
       titleColor={red500}
       title={title}
       actAsExpander={true}
       showExpandableButton={true}>
       Due Date:{"\t" + dateTwo.toDateString()}
      </CardHeader>
      <CardActions>
        <Checkbox checked={done} onCheck={this.selectTodo.bind(this)}/>
      </CardActions>
      <CardText expandable={ true } >
        { drilled }
      </CardText>
      </Card>;
    }

    return(
      <li className="task-item">
        { card }
      </li>

    );
  }

}


export default TodoListObject;
