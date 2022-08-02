import React from 'react';
import avatar from './accAvatar.svg'
import './styles.sass'

const UserAvatar = () => {
   return (
      <div className='App__user-avatar'>
         <img src={avatar} alt="User Avatar" />
      </div>
   );
};

export default UserAvatar;