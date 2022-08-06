import React from 'react';
import Task from '../Task/Task';

const Tasks = ({
   tasks,
   edit,
   check,
   remove,
   cancel,
   taskTitle,
   setTaskTitle,
   editableTask,
}) => {
   return (
      <div className='App__tasks'>
         {tasks.map((task) => (
            <Task
               task={task}
               edit={edit}
               check={check}
               cancel={cancel}
               remove={remove}
               taskTitle={taskTitle}
               setTaskTitle={setTaskTitle}
               editableTask={editableTask}
               title={task.title}
               completed={task.completed}
               key={task.id}
            />
         ))}
      </div>
   );
};

export default Tasks;
