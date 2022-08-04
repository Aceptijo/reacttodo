import React from 'react';
import './AddTaskTotalCount.sass';

const AddTaskTotalCount = ({ valueTotal, valueCompleted }) => {
   return (
      <div className='App__add-task-count'>
         <span className='App__add-task-count-total'>
            Total: {valueTotal + valueCompleted}
         </span>
         <span className='App__add-task-count-todo'>To do: {valueTotal}</span>
         <span className='App__add-task-count-completed'>
            Completed: {valueCompleted}
         </span>
      </div>
   );
};

export default AddTaskTotalCount;
