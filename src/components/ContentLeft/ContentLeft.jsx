import React from 'react';
import AddTask from '../AddTask/AddTask';
import AddTaskTotalCount from '../AddTaskTotalCount/AddTaskTotalCount';
import AllTasks from '../AllTasks/AllTasks';
import './ContentLeft.sass';
import './ContentLeft-media.sass';

const ContentLeft = ({ completedTasks, tasks, check, create, remove }) => {
   return (
      <div className='App__сontentLeft'>
         <AddTask create={create} />
         <AddTaskTotalCount
            valueTotal={tasks.length}
            valueCompleted={completedTasks.length}
         />
         <AllTasks remove={remove} tasks={tasks} check={check} />
      </div>
   );
};

export default ContentLeft;
