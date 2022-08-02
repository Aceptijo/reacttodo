import React from 'react';
import NavbarLogo from '../NavbarLogo/NavbarLogo';
import NavbarTitle from '../NavbarTitle/NavbarTitle';
import User from '../User/User';
import './styles.sass'


const Navbar = () => {
   return (
      <div className='App__navbar'>
         <NavbarLogo />
         <NavbarTitle />
         <User />
      </div>
   );
};

export default Navbar;