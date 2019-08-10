import React from 'react';
import Clock from './components/clock'
import './App.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div className="Hello">
        <header className="IAmAHeader">
          I am a header
          <p>
            Underneath the header I am!
          </p>
          <Welcome name="Created and Passed into this" />
        </header>
      <p>
        Hello! Do msa!
      </p>
      <Clock />
      <footer className="IAmAFooter">
        I am a footer
        <button>
          Supppppp
        </button>
      </footer>
    </div>
  );
}

export default App;
