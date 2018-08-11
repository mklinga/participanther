import React from 'react';

import ListEditor from './components/ListEditor';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">
        {'Nord Software'}
      </h1>
    </header>
    <ListEditor />
  </div>
);

export default App;
