import React from 'react';
import PeriodicText from './PeriodicText';
import NameForm from './NameForm';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const { firstName, lastName } = useSelector((state) => state.names.value )
  return (
    <div className="App">
      <div className="container">
        <PeriodicText text={firstName}></PeriodicText>
        <PeriodicText text={lastName}></PeriodicText>
        <NameForm/>
      </div>
    </div>
  );
}

export default App;
