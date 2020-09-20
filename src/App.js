import React from 'react';
import logo from './logo.svg';
import Checkbox from './Checkbox';
import TruckPanel from './TruckPanel';
import MoveButton from './MoveButton';
import './App.css';

const truckList = [];

const TruckList = (props) => {
  <div>
    {truckList.map(truck => <TruckPanel {...truck}/>)}<TruckPanel />
  </div>
};

function App() {
  return (
    <div className="App">
      <MoveButton />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
