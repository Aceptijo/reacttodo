import React from 'react';
import './AddTaskButton.sass';

const AddTaskButton = () => {
   const showInfo = () => {
      return console.log('asd');
   };

   return (
      <button onClick={showInfo} className='App__add-task-button'>
         Add
      </button>
   );
};

export default AddTaskButton;
