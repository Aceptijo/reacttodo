import React from 'react';
import './Task.sass';
import deleteIcon from './deleteIcon.svg';
import editIcon from './editIcon.svg';
import cancelIcon from './cancel.png';

const Task = ({ value, remove, task, check, edit, editableTask, cancel }) => {
   return (
      <div className='App__task'>
         <input
            type='checkbox'
            onClick={() => {
               check(task);
               remove(task);
            }}
         />
         <label> {value} </label>
         {editableTask?.key === task.key ? (
            <img onClick={cancel} src={cancelIcon} alt='Cancel' />
         ) : (
            <>
               <img onClick={() => edit(task)} src={editIcon} alt='Edit' />
               <img
                  onClick={() => remove(task)}
                  src={deleteIcon}
                  alt='Delete'
               />
            </>
         )}
      </div>
   );
};

export default Task;
