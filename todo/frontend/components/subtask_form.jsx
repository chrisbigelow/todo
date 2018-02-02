import { uniqueId } from '../util/id_generator';
import React from 'react';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




class SubtaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      date:  null,
      done: false,
      task_id: this.props.todo_id
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
    const sub = Object.assign({}, this.state);

    this.props.createSubtask(this.props.todo_id, sub).then(
      this.setState({
        title: "",
        body: ""
      }) // reset form
    );
  }

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label>Task:
          <TextField ref="title" value={this.state.title} onChange={this.update('title')} hintText="Task" required />
        </label>
        <label>Due Date:
          <DatePicker hintText="Portrait Dialog" value={this.state.date} onChange={this.handleDateChange}/>
        </label>
        <label>Body:
          <TextField
            hintText="Body"
            ref="body"
            floatingLabelText="Task Body"
            onChange={this.update('body')}
            value={this.state.body}
            multiLine={true}
            rows={3}
            required
          />
        </label>
        <RaisedButton type="submit" label="Create SubTask"/>
      </form>
    );
  }


}

export default SubtaskForm;
