import React from 'react';
import image from './Vector.svg'
import './styles.sass'


const NavbarLogo = () => {
   return (
      <div className="App__navbar-logo">
         <img src={image} alt="Main Logo" />
         <span>To-Do</span>
      </div>
   );
};

export default NavbarLogo;