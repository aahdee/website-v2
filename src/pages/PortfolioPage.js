import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../utils/BackButton";
import "./Portfolio.css"
import data from "./portfolioData/portfolioData.json"
import { thumbImage } from "./imageSources"
// console.log(data.largeProjects[0])

function Title(){
    return(
        <p className="Title">Selection of Work</p>
    )
}


function TileG(props){
    const info = props.info
    return(
        <div className="Tile">
            <div className="SWImgCol">
                <img
                    className="SWImg"
                    src={thumbImage(info.imageLink)}
                    alt={info.name}
                />
            </div>
            <div className="SWText">
                <div className="SWName">{info.name}</div>
                <div className="SWYear">{info.year}</div>
                <p className="SWDescription">{info.description}</p>
                {info.link && (info.link.startsWith("/") ? (
                    //internal page on this site, e.g. "/plotter"
                    <Link className="SWLink" to={info.link}>Click here to view more</Link>
                ) : (
                    <a className="SWLink" href={info.link}>Click here to view more</a>
                ))}
            </div>
        </div>
    )
}



function PortfolioPage(){
    const renderLargeProj = data.largeProjects.map(
        (info) => {
            return (<TileG key={info.name} info={info}/>)
        }
    )
    return(
        <div className="subpage PortfolioPage">
            <Title/>
            <div className="List">
                {renderLargeProj}
            </div>
            <BackButton text="Back"/>
        </div>
    )
}

export default PortfolioPage;