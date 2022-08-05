import React from 'react';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import './ContentRight.sass';
import './ContentRight-media.sass';

const ContentRight = ({ completedTasks, removeCompleted, reverseCheck }) => {
   return (
      <div className='App__contentRight'>
         <span>Completed ({completedTasks.length})</span>
         {completedTasks.length ? (
            <CompletedTasks
               completedTasks={completedTasks}
               removeCompleted={removeCompleted}
               reverseCheck={reverseCheck}
            />
         ) : (
            <h1>Nothing</h1>
         )}
      </div>
   );
};

export default ContentRight;
