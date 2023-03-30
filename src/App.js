import './App.css';
import Typewriter from "typewriter-effect";
import React from "react";
import Papa from "papaparse";


const AnotherComponent = () => {
  return <button> my button </button>
}

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

    <button> my button </button>
    </div>
  );
}

export default App;
