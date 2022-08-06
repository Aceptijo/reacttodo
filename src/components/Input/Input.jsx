import React from 'react';
import './Input.sass';

const Input = (props) => {
   return (
      <form className='App_add-task-form'>
         <input
            {...props}
            className='App__add-task-input'
            placeholder='+ Add a task, press Enter to save'
            type='text'
         />
      </form>
   );
};

export default Input;
