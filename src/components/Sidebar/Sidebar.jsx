import React from 'react';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import './styles.sass'


const Sidebar = () => {
   return (
      <div className='App__sidebar'>
         <SidebarMenu />
      </div>
   );
};

export default Sidebar;