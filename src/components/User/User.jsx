import React from 'react';
import UserArrow from '../UserArrow/UserArrow';
import UserAvatar from '../UserAvatar/UserAvatar';
import UserName from '../UserName/UserName';
import './User.sass'

const User = () => {
   return (
      <div className='App__user'>
         <UserName />
         <UserAvatar />
         <UserArrow />
      </div>
   );
};

export default User;