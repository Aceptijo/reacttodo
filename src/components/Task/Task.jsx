import React from 'react';
import './styles.sass'
import deleteIcon from './deleteIcon.svg'
import editIcon from './editIcon.svg'

const Task = () => {
   return (
      <div className="App__task">
         <input
            type="checkbox"
         />
         <label>Add Icon to Dashboard</label>
         <img src={editIcon} alt="Edit" />
         <img src={deleteIcon} alt="Delete" />
      </div>
   );
};

export default Task;