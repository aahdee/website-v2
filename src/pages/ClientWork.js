import React from "react";
import BackButton from "../utils/BackButton";
import "./Portfolio.css"
import data from "./portfolioData/portfolioData.json"
console.log(data.largeProjects[0])

function Title(){
    return(
        <p className="Title">Client Work</p>
    )
}


function TileG(props){
    const info = props.info
    console.log(info.imageLink)
    if (info.link){
        return(
            <div className="Tile">
                <div>
                    <img className="SWImg" src={require(`${info.imageLink}`)}/>
                </div>
                <div>
                    <div className="SWName">{info.name}</div>
                    <div className="SWYear">{info.year}</div>
                    <p className="SWDescription">{info.description}</p>
                    <a className="SWLink" href={info.link}>Click here to view more</a>
                </div>
            </div>
        )
    }
    return(
        <div className="Tile">
            <div>
                <img className="SWImg" src={require(`${info.imageLink}`)}/>
            </div>
            <div>
                <div className="SWName">{info.name}</div>
                <div className="SWYear">{info.year}</div>
                <p className="SWDescription">{info.description}</p>
            </div>
        </div>
    )
    
}



function ClientWork(){
    const renderLargeProj = data.largeProjects.map(
        (info) => {
            return (<TileG info={info}/>)
        }
    )
    return(
        <div className="subpage"> 
            <Title/>
            <div className="List">
                {renderLargeProj}
            </div>
            <BackButton text="Back"/>
        </div>
    )
}

export default ClientWork;