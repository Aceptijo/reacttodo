import React from 'react';
import ContentLeft from '../ContentLeft/ContentLeft';
import ContentRight from '../ContentRight/ContentRight';
import './ContentWrapper.sass'

const ContentWrapper = () => {
   return (
      <div className='App__content-wrapper'>
         <ContentLeft />
         <ContentRight />
      </div>
   );
};

export default ContentWrapper;