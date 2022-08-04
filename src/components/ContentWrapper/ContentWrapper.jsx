import React, { useState } from 'react';
import ContentLeft from '../ContentLeft/ContentLeft';
import ContentRight from '../ContentRight/ContentRight';
import './ContentWrapper.sass';
import './ContentWrapper-media.sass';

const ContentWrapper = () => {
   const [tasks, setTasks] = useState([]);
   const [completedTasks, setCompletedTasks] = useState([]);

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
            completedTasks={completedTasks}
            tasks={tasks}
            check={check}
            create={create}
            remove={remove}
         />
         <ContentRight
            completedTasks={completedTasks}
            check={check}
            removeCompleted={removeCompleted}
            reverseCheck={reverseCheck}
         />
      </div>
   );
};

export default ContentWrapper;
