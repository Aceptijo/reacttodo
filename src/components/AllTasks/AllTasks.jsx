import React from 'react';
import Tasks from '../Tasks/Tasks';
import './AllTasks.sass';

const AllTasks = ({
   tasks,
   remove,
   check,
   edit,
   taskTitle,
   setTaskTitle,
   editableTask,
   cancelEditTask,
}) => {
   return (
      <div className='App__all-tasks'>
         <span>To do ({tasks.length})</span>
         {tasks.length ? (
            <Tasks
               tasks={tasks}
               edit={edit}
               check={check}
               remove={remove}
               cancel={cancelEditTask}
               taskTitle={taskTitle}
               setTaskTitle={setTaskTitle}
               editableTask={editableTask}
            />
         ) : (
            <h1>Nothing</h1>
         )}
      </div>
   );
};

export default AllTasks;
