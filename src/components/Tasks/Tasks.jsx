import React from 'react';
import Task from '../Task/Task';

const Tasks = ({
   tasks,
   remove,
   check,
   setTaskTitle,
   taskTitle,
   edit,
   cancel,
   editableTask,
}) => {
   return (
      <div className='App__tasks'>
         {tasks.map((task) => (
            <Task
               editableTask={editableTask}
               cancel={cancel}
               edit={edit}
               check={check}
               remove={remove}
               task={task}
               value={task.body}
               key={task.key}
               taskTitle={taskTitle}
               setTaskTitle={setTaskTitle}
            />
         ))}
      </div>
   );
};

export default Tasks;
