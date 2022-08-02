import React from 'react';
import AddTaskButton from '../AddTaskButton/AddTaskButton';
import AddTaskInput from '../AddTaskInput/AddTaskInput';
import './AddTask.sass'


const AddTask = () => {
   return (
      <div className='App__add-task'>
         <AddTaskInput />
         <AddTaskButton />
      </div>
   );
};

export default AddTask;