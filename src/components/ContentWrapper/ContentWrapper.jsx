import React, { useState } from 'react';
import ContentLeft from '../ContentLeft/ContentLeft';
import ContentRight from '../ContentRight/ContentRight';
import './ContentWrapper.sass';
import './ContentWrapper-media.sass';

const ContentWrapper = () => {
   const [tasks, setTasks] = useState([]);
   const [completedTasks, setCompletedTasks] = useState([]);
   const [taskTitle, setTaskTitle] = useState('');
   const [editableTask, setEditableTask] = useState(null);

   const editTask = (task) => {
      setEditableTask(task);
      setTaskTitle(task.body);
   };

   const saveEditTask = (newBody) => {
      const newTask = { ...editableTask, body: newBody };
      setTasks((tasks) =>
         tasks.map((task) => (task.key !== newTask.key ? task : newTask))
      );
      setEditableTask(null);
   };

   const cancelEditTask = () => {
      setEditableTask(null);
   };

   const create = (newTask) => {
      setTasks([...tasks, newTask]);
   };

   const remove = (task) => {
      setTasks(tasks.filter((t) => t.key !== task.key));
   };

   const removeCompleted = (completed) => {
      setCompletedTasks(completedTasks.filter((t) => t.key !== completed.key));
   };

   const check = (checkedTask) => {
      setCompletedTasks([...completedTasks, checkedTask]);
   };

   const reverseCheck = (completed) => {
      setTasks([...tasks, completed]);
   };

   return (
      <div className='App__content-wrapper'>
         <ContentLeft
            edit={editTask}
            tasks={tasks}
            check={check}
            create={create}
            remove={remove}
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            completedTasks={completedTasks}
            editableTask={editableTask}
            cancelEditTask={cancelEditTask}
            saveEditTask={saveEditTask}
         />
         <ContentRight
            check={check}
            removeCompleted={removeCompleted}
            completedTasks={completedTasks}
            reverseCheck={reverseCheck}
         />
      </div>
   );
};

export default ContentWrapper;
