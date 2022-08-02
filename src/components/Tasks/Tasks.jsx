import React from 'react';
import Task from '../Task/Task';
import './styles.sass'

const Tasks = () => {
   return (
      <div className='App__tasks'>
         <Task />
         <Task />
         <Task />
      </div>
   );
};

export default Tasks;