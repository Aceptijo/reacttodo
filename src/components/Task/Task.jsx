import React from 'react';
import './Task.sass';
import deleteIcon from './deleteIcon.svg';
import editIcon from './editIcon.svg';

const Task = ({ value }) => {
   return (
      <div className='App__task'>
         <input type='checkbox' />
         <label>{value}</label>
         <img src={editIcon} alt='Edit' />
         <img src={deleteIcon} alt='Delete' />
      </div>
   );
};

export default Task;
