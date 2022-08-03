import React from 'react';
import AddTaskButton from '../AddTaskButton/AddTaskButton';
import AddTaskInput from '../AddTaskInput/AddTaskInput';
import './AddTask.sass';

const AddTask = ({ taskTitle, setTaskTitle, create }) => {
   return (
      <div className='App__add-task'>
         <AddTaskInput
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
         />
         <AddTaskButton onClick={create} />
      </div>
   );
};

export default AddTask;
