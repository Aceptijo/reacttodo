import React from 'react';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import Sidebar from '../Sidebar/Sidebar';
import './Content.sass';

const Content = () => {
   return (
      <div className='App__content'>
         <Sidebar />
         <ContentWrapper />
      </div>
   );
};

export default Content;
