import React from 'react';
import CompletedTask from '../CompletedTask/CompletedTask';
import './styles.sass'

const CompletedTasks = () => {
   return (
      <div className='App__completed-tasks'>
         <span>Completed ({3})</span>
         <CompletedTask />
         <CompletedTask />
         <CompletedTask />
      </div>
   );
};

export default CompletedTasks;