import React from 'react';
import Tasks from '../Tasks/Tasks';
import './AllTasks.sass'

const AllTasks = () => {
   return (
      <div className='App__all-tasks'>
         <span>To do ({3})</span>
         <Tasks />
      </div>
   );
};

export default AllTasks;