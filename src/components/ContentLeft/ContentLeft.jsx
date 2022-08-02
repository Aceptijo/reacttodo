import React from 'react';
import AddTask from '../AddTask/AddTask';
import AddTaskTotalCount from '../AddTaskTotalCount/AddTaskTotalCount';
import AllTasks from '../AllTasks/AllTasks';
import './styles.sass';


const ContentLeft = () => {
   return (
      <div className='App__сontentLeft'>
         <AddTask />
         <AddTaskTotalCount value={5} />
         <AllTasks />
      </div>
   );
};

export default ContentLeft;