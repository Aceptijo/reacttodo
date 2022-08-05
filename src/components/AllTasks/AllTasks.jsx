import React from 'react';
import Tasks from '../Tasks/Tasks';
import './AllTasks.sass';

const AllTasks = ({
   tasks,
   remove,
   check,
   taskTitle,
   setTaskTitle,
   edit,
   cancelEditTask,
   editableTask,
}) => {
   return (
      <div className='App__all-tasks'>
         <span>To do ({tasks.length})</span>
         {tasks.length ? (
            <Tasks
               cancel={cancelEditTask}
               editableTask={editableTask}
               edit={edit}
               tasks={tasks}
               remove={remove}
               check={check}
               taskTitle={taskTitle}
               setTaskTitle={setTaskTitle}
            />
         ) : (
            <h1>Nothing</h1>
         )}
      </div>
   );
};

export default AllTasks;
