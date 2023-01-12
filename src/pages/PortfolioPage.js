import React from "react";
import img from "./portfolioData/imgs/a.png"
import "./Portfolio.css"

function Title(){
    return(
        <p className="Title">Seletcted Works</p>
    )
}

function Tile(){
    return(
        <div className="Tile">
            <div>
                <img src={require("./portfolioData/imgs/p5gridexample.gif")}/>
            </div>
            <div>
                <div className="SWName">
                p5grid
                </div>
                <p className="SWDescription">fdfdsfdsafdsa fsdafsfs</p>
            </div>
        </div>
    )
}

function PortfolioPage(){
    return(
        <div className="subpage"> 
            <Title/>
            <div className="List">
                <Tile/>
                <Tile/>
                
            </div>
        </div>
    )
}

export default PortfolioPage;