import React from 'react';
import CompletedTask from '../CompletedTask/CompletedTask';
import './CompletedTasks.sass';

const CompletedTasks = ({ completedTasks, removeCompleted, reverseCheck }) => {
   return (
      <div className='App__completed-tasks'>
         {completedTasks.map((completed) => (
            <CompletedTask
               removeCompleted={removeCompleted}
               reverseCheck={reverseCheck}
               completed={completed}
               value={completed.title}
               key={completed.id}
            />
         ))}
      </div>
   );
};

export default CompletedTasks;
