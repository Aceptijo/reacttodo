import React, { useState } from 'react';
import AddTaskButton from '../AddTaskButton/AddTaskButton';
import AddTaskInput from '../AddTaskInput/AddTaskInput';
import './AddTask.sass';

const AddTask = ({ create }) => {
   const [taskTitle, setTaskTitle] = useState('');

   const createNewTask = (event) => {
      event.preventDefault();
      const newTask = {
         key: Date.now(),
         body: taskTitle,
      };
      create(newTask);
      setTaskTitle('');
   };

   return (
      <div className='App__add-task'>
         <AddTaskInput
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
         />
         <AddTaskButton onClick={createNewTask} />
      </div>
   );
};

export default AddTask;
