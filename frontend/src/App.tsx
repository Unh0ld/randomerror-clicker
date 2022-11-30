import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './modules/Counter';
import Darknet from './modules/Darknet';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Darknet></Darknet>
      </header>
    </div>
  );
}

export default App;
