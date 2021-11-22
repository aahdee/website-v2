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
          <Route path="/contact">
            <Contact />
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
          Generative Artist<br />
          2020 Processing Foundation Fellow <br /> 
          Shape Aficionado
        </p>
        <p className="Links">
          <Link className="link" to="/about">
            About
          </Link>
          <a className="link" href="https://github.com/aahdee/resume">Resume</a>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </p>
      </header>
      <body></body>
    </div>
  );
}

function About() {
  return (
    <div className="subpage">
      <p className="Title">About</p>
      <p className="Text"> 
        Born in 1998 in the Bronx to Jamacian immigrants, Aren Davey has always had an affinity 
        for technology, computers, and creative arts since she was a small girl. She developed 
        those interests througout her highschool years as she took AP Computer Science alongside 
        AP Art, a concentration that her highschool was unprepared for as she
        often had half-period gaps to accomdate her schedule. Upon high school gradation, she excitedly enrolled in Carnegie Mellon Univeristy for 
        the Bachelors of Computer Science and Arts program. Currenly, she works full time as a software engineer for 
        Pluralsight while occasionally taking classes at Carnegie Mellon University to finish her degree.</p>
      <p className="Text">
        Aren's artistic work focuses on geometric shapes and their properties and is a reflection of the natural beauty of mathematics. 
        This focus is expressed through genereative digital art, genereative plots, and interactive digital art. She has dabbled a bit with NFTs as well.
      </p>
      <p className="Text">
        In her spare time, she likes to build mechanical keyboards, play strategy games, and dote on her cat Cozy.
      </p>
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

function Contact() {
  return (
    <div className="subpage">
      <p className="Title">Contact</p>
      
      <p className="Links">
        <a className="link" href="https://github.com/aahdee">Github</a>
        <a className="link" href="https://twitter.com/_aahdee_">Twitter</a>
        <a className="link" href="https://hicetnunc.art/aahdee">Hitetnunc</a>
      </p>
      <p className="Text">
        For inquiries, email me at albeit[dot]angular[at]gmail[dot]com or message me on Twitter
      </p>
      <p className="Text">
        If you see the name of aahdee as you explore the internet, it is probably me :)
      </p>
      
    </div>

  );

}
export default App;
