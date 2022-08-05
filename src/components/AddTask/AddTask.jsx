import React from 'react';
import Button from '../Button';
import AddTaskInput from '../AddTaskInput/AddTaskInput';
import './AddTask.sass';

const AddTask = ({ create, taskTitle, setTaskTitle, saveEditTask, isEdit }) => {
   const createNewTask = () => {
      if (taskTitle !== '') {
         const newTask = {
            key: Date.now(),
            body: taskTitle,
         };
         create(newTask);
         setTaskTitle('');
      }
   };

   const handleSaveTask = () => {
      if (taskTitle !== '') {
         saveEditTask(taskTitle);
         setTaskTitle('');
      }
   };

   return (
      <div className='App__add-task'>
         <AddTaskInput
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
         />
         <Button onClick={isEdit ? handleSaveTask : createNewTask}>
            {isEdit ? 'Save' : 'Add'}
         </Button>
      </div>
   );
};

export default AddTask;
