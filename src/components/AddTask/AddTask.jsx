import React, { useState } from 'react';
import AddTaskButton from '../AddTaskButton/AddTaskButton';
import AddTaskInput from '../AddTaskInput/AddTaskInput';
import './AddTask.sass';

const AddTask = () => {
   // const [task, setTask] = useState({ title: 'asd' })

   return (
      <div className='App__add-task'>
         <AddTaskInput />
         <AddTaskButton />
      </div>
   );
};

export default AddTask;
