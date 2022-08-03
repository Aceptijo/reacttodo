import React, { useState } from 'react';
import AddTask from '../AddTask/AddTask';
import AddTaskTotalCount from '../AddTaskTotalCount/AddTaskTotalCount';
import AllTasks from '../AllTasks/AllTasks';
import './ContentLeft.sass';
import './ContentLeft-media.sass';

const ContentLeft = () => {
   const [tasks, setTasks] = useState([]);

   const [taskTitle, setTaskTitle] = useState('');

   const create = (event) => {
      event.preventDefault();
      const newTask = {
         key: Date.now(),
         body: taskTitle,
      };
      setTasks([...tasks, newTask]);
      setTaskTitle('');
   };

   return (
      <div className='App__сontentLeft'>
         <AddTask
            tasks={tasks}
            setTasks={setTasks}
            key={tasks.id}
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            create={create}
         />
         <AddTaskTotalCount value={tasks.length} />
         <AllTasks tasks={tasks} key={tasks.id} />
      </div>
   );
};

export default ContentLeft;
