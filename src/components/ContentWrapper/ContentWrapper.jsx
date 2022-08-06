import React, { useEffect, useState } from 'react';
import ContentLeft from '../ContentLeft/ContentLeft';
import ContentRight from '../ContentRight/ContentRight';
import './ContentWrapper.sass';
import './ContentWrapper-media.sass';
import axios from 'axios';

const ContentWrapper = () => {
   const [tasks, setTasks] = useState([]);
   const [completedTasks, setCompletedTasks] = useState([]);
   const [taskTitle, setTaskTitle] = useState('');
   const [editableTask, setEditableTask] = useState(null);

   useEffect(() => {
      fetchTasks();
   }, []);

   async function fetchTasks() {
      const response = await axios.get(
         'https://jsonplaceholder.typicode.com/todos'
      );
      const completedTrue = response.data.filter(
         (task) => task.completed === true
      );
      const completedFalse = response.data.filter(
         (task) => task.completed === false
      );
      setTasks(completedTrue);
      setCompletedTasks(completedFalse);
   }

   const editTask = (task) => {
      setEditableTask(task);
      setTaskTitle(task.title);
   };

   const saveEditTask = (newBody) => {
      const newTask = { ...editableTask, title: newBody };
      setTasks((tasks) =>
         tasks.map((task) => (task.id !== newTask.id ? task : newTask))
      );
      setEditableTask(null);
   };

   const cancelEditTask = () => {
      setEditableTask(null);
      setTaskTitle('');
   };

   const create = (newTask) => {
      setTasks([...tasks, newTask]);
   };

   const remove = (task) => {
      setTasks(tasks.filter((t) => t.id !== task.id));
   };

   const removeCompleted = (completed) => {
      setCompletedTasks(completedTasks.filter((t) => t.id !== completed.id));
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
