import React from "react";
import BackButton from "../utils/BackButton";
import "./Portfolio.css"
import data from "./portfolioData/portfolioData.json"
// console.log(data.largeProjects[0])





function ClientWork(){
    return (
      <div className="subpage">
        <p className="Title">Client Work</p>
        <div className="AllText">
          <p className="Text"> 
            My password protected client portfolio is  <a className="link" style={{fontSize: '1em'}} href="https://aahdee.cargo.site">linked here</a>

          </p>
          <p className="Text">
            Email albeit[dot]angular[at]gmail[dot]com to request a password. Please include your name, company, and purpose. 
          </p>

        </div>
        <BackButton text="Back"/>
      </div>
    );
}

export default ClientWork;