import React, { useState } from 'react';
import AddTask from '../AddTask/AddTask';
import AddTaskTotalCount from '../AddTaskTotalCount/AddTaskTotalCount';
import AllTasks from '../AllTasks/AllTasks';
import './ContentLeft.sass';
import './ContentLeft-media.sass';

const ContentLeft = () => {
   const [tasks, setTasks] = useState([]);

   const create = (newTask) => {
      setTasks([...tasks, newTask]);
   };

   const remove = (task) => {
      setTasks(tasks.filter((t) => t.key !== task.key));
   };

   return (
      <div className='App__сontentLeft'>
         <AddTask create={create} />
         <AddTaskTotalCount value={tasks.length} />
         <AllTasks remove={remove} tasks={tasks} />
      </div>
   );
};

export default ContentLeft;
