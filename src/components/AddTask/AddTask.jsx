import React from 'react';
import Button from '../Button';
import Input from '../Input/Input';
import './AddTask.sass';

const AddTask = ({ create, taskTitle, setTaskTitle, saveEditTask, isEdit }) => {
   const createNewTask = () => {
      if (taskTitle !== '') {
         const newTask = {
            title: taskTitle,
            completed: false,
            id: Date.now(),
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
         <Input
            title={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
         />
         <Button onClick={isEdit ? handleSaveTask : createNewTask}>
            {isEdit ? 'Save' : 'Add'}
         </Button>
      </div>
   );
};

export default AddTask;
