import React from 'react';
import CompletedTasks from '../CompletedTasks/CompletedTasks';
import './ContentRight.sass'
import './ContentRight-media.sass'


const ContentRight = () => {
   return (
      <div className='App__contentRight'>
         <CompletedTasks />
      </div>
   );
};

export default ContentRight;