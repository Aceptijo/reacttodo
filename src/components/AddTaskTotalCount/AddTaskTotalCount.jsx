import React from 'react';
import './AddTaskTotalCount.sass'

const AddTaskTotalCount = (props) => {
   return (
      <div className='App__add-task-total-count'>
         <span>Total: {props.value}</span>
      </div>
   );
};

export default AddTaskTotalCount;