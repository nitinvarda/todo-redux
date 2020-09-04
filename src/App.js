import React from 'react';
import Add from './components/Add';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
// import './App.css';

function App() {

  return (
    <div >
      <Navbar />
      <Add />
      <Todos />
    </div>
  );
}

export default App;
