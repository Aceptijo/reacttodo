import React from 'react';
import deleteCompletedTask from './deleteIcon.svg'
import './CompletedTask.sass'

const CompletedTask = () => {
   return (
      <div className='App__completed-task'>
         <input
            type="checkbox"
            defaultChecked
         />
         <label>Add Icon to Dashboard</label>
         <img src={deleteCompletedTask} alt="Delete" />
      </div>
   );
};

export default CompletedTask;