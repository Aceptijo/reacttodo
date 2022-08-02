import React from 'react';
import './styles.sass'
import tasks from './Tasks.svg'

const SidebarMenu = () => {
   return (
      <div className='App__sidebar-menu'>
         <img src={tasks} alt="Menu tasks" />
      </div>
   );
};

export default SidebarMenu;