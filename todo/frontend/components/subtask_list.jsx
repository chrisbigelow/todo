
import React from 'react';

import SubtaskListItemContainer from './subtask_list_item_container';
import SubtaskForm from './subtask_form';

const SubtaskList = ({ subtasks, todo_id, createSubtask }) => {
  const subtaskItems = subtasks.map(subtask => (
    <SubtaskListItemContainer
      key={subtask.id}
      subtask={subtask} />
  ));
  
  return (
    <div>
      <ul className="subtask-list">
        { subtaskItems }
      </ul>
      <SubtaskForm todo_id={ todo_id } createSubtask={ createSubtask } />
    </div>
  )
};

export default SubtaskList;