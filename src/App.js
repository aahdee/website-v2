import React from "react";
import aahdeelogo from "./aahdeelogo.svg";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import BackButton from "./utils/BackButton";
import ClientWork from "./pages/ClientWork";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage/>
          </Route>
          <Route path="/client">
            <ClientWork/>
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
  return(
    <div className="Home">
    <header className="App-header">
        <img src={aahdeelogo} className="App-logo" alt="logo" />
        <div className="Title-Wrapper">
          <p className="Title" style={{margin:"16px"}}>Aren Davey</p>
          <p className="Bio">
          Generative Artist<br />
          2020 Processing Foundation Fellow <br /> 
          Shape Aficionado
          </p>
          <p className="Links">
          <Link className="link" to="/about">
              About
          </Link>
          <a className="link" href="https://github.com/aahdee/resume/blob/master/resume.pdf">Résumé</a>
          <Link className="link" to="/portfolio">
              Personal Work
          </Link>
          
          </p>
          <p className="Links">
              {/* s */}
              <Link className="link" to="/contact">
                  Contact
              </Link>
          </p>
        </div>
    </header>
    <body>
    </body>
    </div>
);
}


function Contact() {
  return (
    <div className="subpage">
      <p className="Title">Contact</p>
      
      
      <div className="AllText">
        <p className="Links">
          <a className="link" href="https://github.com/aahdee">Github</a>
          <a className="link" href="https://hicetnunc.art/aahdee">Hitetnunc</a>
        </p>
        <p className="Text">
          For inquiries, email me at albeit[dot]angular[at]gmail[dot]com
        </p>
        <p className="Text">
          If you see the name of aahdee as you explore the internet, it is probably me :)
      </p>
      </div>
      <BackButton text="Back" />
    </div>

  );

}
export default App;
