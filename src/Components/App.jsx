import './styles/App.css';
import Typewriter from "typewriter-effect";
import React, { useState, useEffect } from 'react';
import Papa from "papaparse";
import DelayedButton from "./DelayedButton";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Typewriter
        onInit = {(typewriter) => {
          typewriter
          .typeString("Good morning Mr Resturaunt")
          .pauseFor(1000)
          .deleteAll()
          .typeString("We have data on the numbers of meals we currently have reserved for you.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Ready to see?")
          .start();
        }}
      />
    <DelayedButton/>
    </div>
  );
}

export default App;
