import React from "react";
import aahdeelogo from "./aahdeelogo.svg";
import { BroswerRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={aahdeelogo} className="App-logo" alt="logo" />
        <p className="Name">Aren E. Davey</p>
        <p className="Bio">
          Carnegie Mellon University BCSA Student <br />
          2020 Processing Foundation Fellow <br /> Generative Artist <br />
          Twitch Streamer
          <br />
          Shape Aficionado
        </p>
      </header>
    </div>
  );
}

function Home() {
  return (
    <header className="App-header">
      <img src={aahdeelogo} className="App-logo" alt="logo" />
      <p className="Name">Aren E. Davey</p>
      <p className="Bio">
        Carnegie Mellon University BCSA Student <br />
        2020 Processing Foundation Fellow <br /> Generative Artist <br />
        Twitch Streamer
        <br />
        Shape Aficionado
      </p>
    </header>
  );
}

export default App;
