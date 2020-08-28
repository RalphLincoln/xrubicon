import React from 'react';
import logo from './logo.svg';
import './App.css';

import Table from './Component/Table';



function App() {
  return (
    <div>
      <nav className="navbar shadow navbar-light bg-light">
        <a className="navbar-brand" href="#">
          TaskX
          </a>
      </nav>
      <div className="App">
        <Table />
      </div>
    </div>

  );
}

export default App;
