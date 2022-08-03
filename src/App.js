import React from 'react';
import './App.sass';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
   return (
      <div className='App'>
         <Navbar />
         <Sidebar />
         <ContentWrapper />
      </div>
   );
}

export default App;
