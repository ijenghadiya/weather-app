import React from 'react';
import './App.css';
import WeekContainer from "./components/WeekContainer";


const dotenv=require('dotenv').config()

function App() {
  return (
    <div className="App">
      <WeekContainer />
    </div>
  );
}

export default App;
