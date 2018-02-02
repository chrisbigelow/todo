import React from 'react';
import merge from 'lodash/merge';

class SubtaskListItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleStep = this.toggleStep.bind(this);
  }

  toggleStep(e) {
    const toggledStep = merge({}, this.props.subtask, {
      done: !this.props.subtask.done
    });
    this.props.updateSubtask(toggledStep);
  }

  render() {
    return (
      <li className="subtask-header">
        <div className="subtask-info">
          <h3>{this.props.subtask.title}</h3>
          <p>{this.props.subtask.body}</p>
        </div>
        <div className="subtask-buttons">
          <button
            className={this.props.subtask.done ? "done" : "undone"}
            onClick={this.toggleStep}>
            {this.props.subtask.done ? "Undo" : "Done"}
          </button>
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