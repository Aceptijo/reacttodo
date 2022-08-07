import React, { useEffect, useState } from 'react';
import ContentLeft from '../ContentLeft/ContentLeft';
import ContentRight from '../ContentRight/ContentRight';
import './ContentWrapper.sass';
import './ContentWrapper-media.sass';

const ContentWrapper = () => {
   const [tasks, setTasks] = useState([]);
   const [completedTasks, setCompletedTasks] = useState([]);
   const [taskTitle, setTaskTitle] = useState('');
   const [editableTask, setEditableTask] = useState(null);

   useEffect(() => {
      listingAllResources();
   }, []);

   const listingAllResources = async () => {
      const response = await fetch(
         'https://jsonplaceholder.typicode.com/todos'
      );
      let content = await response.json();
      setTasks(
         content.filter((task) => task.completed === false && task.userId === 2)
      );
      setCompletedTasks(
         content.filter((task) => task.completed === true && task.userId === 2)
      );
   };

   const createNewResource = async () => {
      await fetch('https://jsonplaceholder.typicode.com/todos', {
         method: 'POST',
         body: JSON.stringify({
            title: taskTitle,
            completed: false,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((json) => console.log('New task сreated:', json));
   };

   const updateResource = async (newBody) => {
      await fetch('https://jsonplaceholder.typicode.com/todos/200', {
         method: 'PUT',
         body: JSON.stringify({
            title: newBody,
            completed: false,
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((response) => response.json())
         .then((json) => console.log(`Updated title: ${newBody}`));
   };

   const deleteResource = async (task) => {
      fetch('https://jsonplaceholder.typicode.com/todos/201', {
         method: 'DELETE',
      }).then(() => console.log('Deleted', task));
   };

   const editTask = (task) => {
      setEditableTask(task);
      setTaskTitle(task.title);
   };

   const saveEditTask = (newBody) => {
      const newTask = { ...editableTask, title: newBody };
      setTasks((tasks) =>
         tasks.map((task) => (task.id !== newTask.id ? task : newTask))
      );
      updateResource(newBody);
      setEditableTask(null);
   };

   const cancelEditTask = () => {
      setEditableTask(null);
      setTaskTitle('');
   };

   const create = (newTask) => {
      createNewResource();
      setTasks([...tasks, newTask]);
   };

   const remove = (task) => {
      deleteResource(task);
      setTasks(tasks.filter((t) => t.id !== task.id));
   };

   const removeCompleted = (completed) => {
      deleteResource(completed);
      setCompletedTasks(completedTasks.filter((t) => t.id !== completed.id));
   };

   const check = (checkedTask) => {
      checkedTask.completed = true;
      setCompletedTasks([...completedTasks, checkedTask]);
   };

   const reverseCheck = (checkedTask) => {
      checkedTask.completed = false;
      setTasks([...tasks, checkedTask]);
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
