import React from "react";
import BackButton from "../utils/BackButton";

function AboutPage() {
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
        <BackButton text="Back"/>
      </div>
    );
}
export default AboutPage;