import React from 'react';
import Task from '../Task/Task';

const Tasks = ({ tasks, remove }) => {
   return (
      <div className='App__tasks'>
         {tasks.map((task) => (
            <Task
               remove={remove}
               task={task}
               value={task.body}
               key={task.key}
            />
         ))}
      </div>
   );
};

export default Tasks;
