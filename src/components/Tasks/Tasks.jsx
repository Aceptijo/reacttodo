import React from 'react';
import Task from '../Task/Task';

const Tasks = ({ tasks }) => {
   return (
      <div className='App__tasks'>
         {tasks.map((task) => (
            <Task value={task.body} key={task.key} />
         ))}
      </div>
   );
};

export default Tasks;
