import React from 'react';

import ListEditor from './components/ListEditor';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">
        <div className="App-logo" />
        {'Nord Software'}
      </h1>
    </header>
    <ListEditor />
  </div>
);

export default App;
