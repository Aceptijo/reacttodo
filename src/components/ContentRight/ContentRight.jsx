import React from 'react';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import './ContentRight.sass'


const ContentRight = () => {
   return (
      <div className='App__contentRight'>
         <CompletedTasks />
      </div>
   );
};

export default ContentRight;