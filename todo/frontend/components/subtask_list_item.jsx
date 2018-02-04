import React from 'react';
import merge from 'lodash/merge';
import Checkbox from 'material-ui/Checkbox';

class SubtaskListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
  }

  toggleStep(e) {
    const toggledStep = merge({}, this.props.subtask, {
      done: !this.props.subtask.done
    });
    const toggledTask = merge({}, this.props.todo, {
      done: !this.props.todo.done
    });
    this.props.updateSubtask(toggledStep);

    function isTrue(currentValue) {
      return currentValue.done;
    }

    if (this.props.subtasks.some(isTrue)) {
      this.props.updateTodo(toggledTask);
    }
  }

  render() {
    return (
      <li className="subtask-header">
        <div className="subtask-info">
          <h3>{this.props.subtask.title} <Checkbox checked={this.props.subtask.done} onCheck={this.toggleStep}/></h3>
          <p>{this.props.subtask.body}</p>
        </div>
        <div className="subtask-buttons">
          <button
            className="delete-button"
            onClick={this.props.destroySubtask}>
            Delete
          </button>
        </div>
      </li>
    );
  }
}


export default SubtaskListItem;