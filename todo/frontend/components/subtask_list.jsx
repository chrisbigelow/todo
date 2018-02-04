
import React from 'react';

import SubtaskListItemContainer from './subtask_list_item_container';
import SubtaskForm from './subtask_form';

const SubtaskList = ({ subtasks, todo_id, createSubtask, todo }) => {
  const subtaskItems = subtasks.map(subtask => (
    <SubtaskListItemContainer
      key={subtask.id}
      subtasks={subtasks}
      subtask={subtask}
      todo={todo}
       />
  ));

  let form;

  if (subtaskItems.length < 2) {
    form = <SubtaskForm todo_id={ todo_id } createSubtask={ createSubtask } />;
  }

  return (
    <div>
      <ul className="subtask-list">
        { subtaskItems }
      </ul>
      { form }
    </div>
  );
};

export default SubtaskList;