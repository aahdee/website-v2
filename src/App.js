import React from "react";
import aahdeelogo from "./aahdeelogo.svg";
import { createHashRouter, RouterProvider, Outlet, ScrollRestoration, Link } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import BackButton from "./utils/BackButton";
import ClientWork from "./pages/ClientWork";
import PlotterArt from "./pages/PlotterArt";
import PlotterProject from "./pages/PlotterProject";

// Shared wrapper for every page. <ScrollRestoration> scrolls to the top when
// opening a new page, and restores the previous position when going back/forward.
function Layout() {
  return (
    <div className="App">
      <Outlet />
      <ScrollRestoration />
    </div>
  );
}

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/plotter", element: <PlotterArt /> },
      { path: "/plotter/:projectId", element: <PlotterProject /> },
      { path: "/client", element: <ClientWork /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

function Home() {
  return(
    <div className="Home">
    <header className="App-header">
        <img src={aahdeelogo} className="App-logo" alt="logo" />
        <div className="Title-Wrapper">
          <p className="Title" style={{margin:"16px"}}>Aren Davey</p>
          <p className="Bio">
          Creative Technologist<br />
          Generative Artist<br /> 
          Shape Aficionado
          </p>
          <p className="Links">
          <Link className="link" to="/about">
              About
          </Link>
          <a className="link" href="https://github.com/aahdee/resume/blob/master/resume.pdf">Résumé</a>
          <Link className="link" to="/portfolio">
              Selection of Work
          </Link>
          </p>
          <p className="Links">
              {/* s */}
              <Link className="link" to="/client">
                  Client Work
              </Link>
              <Link className="link" to="/contact">
                  Contact
              </Link>

          </p>
        </div>
    </header>
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
