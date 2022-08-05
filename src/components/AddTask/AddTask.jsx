import React from 'react';
import AddTaskButton from '../AddTaskButton/AddTaskButton';
import AddTaskInput from '../AddTaskInput/AddTaskInput';
import './AddTask.sass';

const AddTask = ({ create, taskTitle, setTaskTitle }) => {
   const createNewTask = (event) => {
      event.preventDefault();
      const newTask = {
         key: Date.now(),
         body: taskTitle,
      };
      newTask.body === '' ? setTaskTitle('') : create(newTask);
      setTaskTitle('');
   };

   return (
      <div className='App__add-task'>
         <AddTaskInput
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
         />
         <AddTaskButton onClick={createNewTask} />
      </div>
   );
};

export default AddTask;
