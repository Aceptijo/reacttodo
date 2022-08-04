import React from 'react';
import deleteCompletedTask from './deleteIcon.svg';
import './CompletedTask.sass';

const CompletedTask = ({ value, completed, removeCompleted, reverseCheck }) => {
   return (
      <div className='App__completed-task'>
         <input
            type='checkbox'
            onClick={() => {
               reverseCheck(completed);
               removeCompleted(completed);
            }}
            defaultChecked
         />
         <label>{value}</label>
         <img
            src={deleteCompletedTask}
            onClick={() => removeCompleted(completed)}
            alt='Delete'
         />
      </div>
   );
};

export default CompletedTask;
