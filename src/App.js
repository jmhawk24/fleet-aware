import React from 'react';
import logo from './logo.svg';
import Checkbox from './Checkbox';
import TruckPanel from './TruckPanel';
import MoveButton from './MoveButton';
import './App.css';

const truckList = [
  {name: "MCT1", year: 2015, currentLocation: 1},
  {name: "MCT2", year: 2015, currentLocation: 2}
];

const locationList = [
  {id: 1, name: "theatre lot"},
  {id: 2, name: "secondary lot"}
];

const TruckList = (props) => {
  return (<div>
    {truckList.map(truck => <TruckPanel {...truck}/>)}
  </div>)
};

function App() {
  return (
    <div className="App">
      <MoveButton />
      <TruckList />
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
