import React from 'react';
import AddTask from '../AddTask/AddTask';
import AddTaskTotalCount from '../AddTaskTotalCount/AddTaskTotalCount';
import AllTasks from '../AllTasks/AllTasks';
import './ContentLeft.sass';
import './ContentLeft-media.sass';

const ContentLeft = ({
   edit,
   tasks,
   check,
   create,
   remove,
   taskTitle,
   setTaskTitle,
   completedTasks,
   editableTask,
   cancelEditTask,
   saveEditTask,
}) => {
   return (
      <div className='App__сontentLeft'>
         <AddTask
            create={create}
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            saveEditTask={saveEditTask}
            isEdit={!!editableTask}
         />
         <AddTaskTotalCount
            valueTotal={tasks.length}
            valueCompleted={completedTasks.length}
         />
         <AllTasks
            tasks={tasks}
            remove={remove}
            check={check}
            edit={edit}
            taskTitle={taskTitle}
            setTaskTitle={setTaskTitle}
            editableTask={editableTask}
            cancelEditTask={cancelEditTask}
         />
      </div>
   );
};

export default ContentLeft;
