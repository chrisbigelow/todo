export const fetchSubtasks = task_id => (
  $.ajax({
     method: 'GET',
     url: `/api/tasks/${task_id}/subtasks`
   })
 );
 
 export const createSubtask = (task_id, subtask) => (
   $.ajax({
     method: 'POST',
     url: `/api/tasks/${task_id}/subtasks`,
     data: { subtask }
   })
 );
 
 export const destroySubtask = subtask => (
 $.ajax({
     method: 'DELETE',
     url: `/api/subtasks/${subtask.id}`
   })
 );

 export const updateSubtask = subtask => (
  $.ajax({
      method: 'PATCH',
      url: `/api/subtasks/${subtask.id}`,
      data: { subtask }
    })
  );