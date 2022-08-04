import React from 'react';
import Tasks from '../Tasks/Tasks';
import './AllTasks.sass';

const AllTasks = ({ tasks, remove }) => {
   return (
      <div className='App__all-tasks'>
         <span>To do ({tasks.length})</span>
         {tasks.length ? (
            <Tasks tasks={tasks} remove={remove} />
         ) : (
            <h1>Nothing T_T</h1>
         )}
      </div>
   );
};

export default AllTasks;
