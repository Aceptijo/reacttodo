import React from 'react';
import './AddTaskButton.sass';

const AddTaskButton = (props) => {
   return (
      <form>
         <button
            type='submit'
            className='App__add-task-button'
            {...props}
         >
            Add
         </button>
      </form>
   );
};

export default AddTaskButton;
