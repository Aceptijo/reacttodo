import React from 'react';
import './App.sass';
import Content from './components/Content/Content';
import Navbar from './components/Navbar/Navbar';

function App() {
   return (
      <div className='App'>
         <Navbar />
         <Content />
      </div>
   );
}

export default App;
