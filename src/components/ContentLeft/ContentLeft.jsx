import React from 'react';
import AddTask from '../AddTask/AddTask';
import AddTaskTotalCount from '../AddTaskTotalCount/AddTaskTotalCount';
import AllTasks from '../AllTasks/AllTasks';
import './ContentLeft.sass';
import './ContentLeft-media.sass';

const ContentLeft = ({
   completedTasks,
   tasks,
   check,
   create,
   remove,
   setTaskTitle,
   taskTitle,
   edit,
   editableTask,
   cancelEditTask,
   saveEditTask,
}) => {
   return (
      <div className='App__сontentLeft'>
         <AddTask
            saveEditTask={saveEditTask}
            isEdit={!!editableTask}
            create={create}
            setTaskTitle={setTaskTitle}
            taskTitle={taskTitle}
         />
         <AddTaskTotalCount
            valueTotal={tasks.length}
            valueCompleted={completedTasks.length}
         />
         <AllTasks
            cancelEditTask={cancelEditTask}
            editableTask={editableTask}
            edit={edit}
            remove={remove}
            tasks={tasks}
            check={check}
            setTaskTitle={setTaskTitle}
            taskTitle={taskTitle}
         />
      </div>
   );
};

export default ContentLeft;
