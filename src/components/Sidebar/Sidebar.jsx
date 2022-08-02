import React from 'react';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import './Sidebar.sass'


const Sidebar = () => {
   return (
      <div className='App__sidebar'>
         <SidebarMenu />
      </div>
   );
};

export default Sidebar;