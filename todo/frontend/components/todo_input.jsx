import { uniqueId } from '../util/id_generator';
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      date:  null,
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }


  handleDateChange(event, date) {
    this.setState({
      date: date,
    });
  }


  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);
    this.props.createTodo({ todo }).then(
      () => this.setState({
        title: "",
        body: ""
      })
    );
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <ul className="formlist">
          <li>
            <TextField ref="title" value={this.state.title} onChange={this.update('title')} hintText="Task" required />
          </li>
          <li>
            <DatePicker hintText="Due Date" value={this.state.date} onChange={this.handleDateChange}/>
          </li>
          <li>
            <TextField
              hintText="Body"
              ref="body"
              onChange={this.update('body')}
              value={this.state.body}
              multiLine={true}
              rows={3}
              required
            />
          </li>
          <li className="create">
          <RaisedButton type="submit" label="Create Task"/>
          </li>
        </ul>
      </form>
    );
  }


};

export default TodoInput;