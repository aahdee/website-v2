import React from "react";
import aahdeelogo from "./aahdeelogo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={aahdeelogo} className="App-logo" alt="logo" />
        <p className="Title">Aren Davey</p>
        <p className="Bio">
          Carnegie Mellon University BCSA Student <br />
          2020 Processing Foundation Fellow <br /> Generative Artist <br />
          Twitch Streamer
          <br />
          Shape Aficionado
        </p>
        <p className="Links">
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/resume">
            Resume
          </Link>
        </p>
      </header>
      <body></body>
    </div>
  );
}

function About() {
  return (
    <div className="About">
      <p className="Title">this is the about page</p>
    </div>
  );
}
function Resume() {
  return (
    <div className="Resume">
      <p className="Title">resume here</p>
    </div>
  );
}
export default App;
