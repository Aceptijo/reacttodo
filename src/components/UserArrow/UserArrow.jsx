import React from 'react';
import arrow from './arrow.svg'

const UserArrow = () => {
   return (
      <div className='App__user-arrow'>
         <img src={arrow} alt="Switch User Menu" />
      </div>
   );
};

export default UserArrow;