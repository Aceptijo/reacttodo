import React from 'react';
import Tasks from '../Tasks/Tasks';
import './AllTasks.sass';

const AllTasks = ({ tasks }) => {
   return (
      <div className='App__all-tasks'>
         <span>To do ({tasks.length})</span>
         <Tasks tasks={tasks} />
      </div>
   );
};

export default AllTasks;
