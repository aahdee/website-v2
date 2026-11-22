import React from "react";
import BackButton from "../utils/BackButton";

function AboutPage() {
    return (
      <div className="subpage">
        <p className="Title">About</p>
        <div className="AllText">
          <p className="Text"> 
            Born in 1998 in the Bronx to Jamaican immigrants, Aren Davey has always had an affinity 
            for technology, computers, and creative arts since she was a small girl. She developed 
            those interests through her highschool years as she took AP Computer Science alongside 
            AP Art, a concentration that her highschool was unprepared for as she
            often had half-period gaps to accommodate her schedule. Upon high school gradation, she excitedly enrolled in Carnegie Mellon University for 
            the Bachelors of Computer Science and Arts program. After working as a software engineer and creative technologist
            she returned to Carnegie Mellon with grad school in her sights.</p>
          <p className="Text">
            Aren's artistic work focuses on geometric shapes and their properties and is a reflection of the natural beauty of mathematics. 
            This focus is expressed through generative digital art, generative plots, and interactive digital art. 
          </p>
          <p className="Text">
            In her spare time, she likes to build mechanical keyboards, play strategy games, and dote on her cat Cozy.
          </p>
        </div>
        <BackButton text="Back"/>
      </div>
    );
}
export default AboutPage;