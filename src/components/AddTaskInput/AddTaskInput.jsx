import React from 'react';
import './AddTaskInput.sass'

const AddTaskInput = () => {
   return (
      <input
         className='App__add-task-input'
         placeholder='+ Add a task, press Enter to save'
         type="text" />
   );
};

export default AddTaskInput;