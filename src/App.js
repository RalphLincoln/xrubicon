import React from 'react';
import './App.css';

import Table from './Component/Table';
import Navbar from './Component/Navbar';



function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Table />
      </div>
    </div>

  );
}

export default App;
