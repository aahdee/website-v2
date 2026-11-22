import React, { useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../utils/BackButton";
import ImageViewer, { ZoomableImage } from "../utils/ImageViewer";
import data from "./portfolioData/plotterData.json"
import { fullImage, thumbImage } from "./imageSources"
import "./Plotter.css"


function Title(){
    return(
        <p className="Title">Plotter Artwork</p>
    )
}


// A large project links to its own page (/plotter/<id>) when it has photos.
export function projectPath(info){
    return info.id && info.photos && info.photos.length > 0
        ? `/plotter/${info.id}`
        : null
}


function TileG(props){
    const info = props.info
    const link = props.link
    return(
        <div className="Tile">
            <div>
                <ZoomableImage
                    className="SWImg"
                    src={thumbImage(info.imageLink)}
                    fullSrc={fullImage(info.imageLink)}
                    alt={info.name}
                    onOpen={props.onOpen}
                />
            </div>
            <div>
                <div className="SWName">{info.name}</div>
                <div className="SWYear">{info.year}</div>
                <p className="SWDescription">{info.shortDescription}</p>
                {link && <Link className="SWLink" to={link}>View more</Link>}
            </div>
        </div>
    )

}


function PlotterArt(){
    const [viewing, setViewing] = useState(null)
    const closeViewer = () => setViewing(null)

    const renderLargeProj = data.largeProjects.map(
        (info) => {
            return (<TileG key={info.id || info.name} info={info} link={projectPath(info)} onOpen={setViewing}/>)
        }
    )
    // const renderSmallProj = data.smallProjects.map(
    //     (info) => {
    //         return (<TileG key={info.name} info={info} onOpen={setViewing}/>)
    //     }
    // )
    return(
        <div className="subpage PlotterPage">
            <Title/>
            <div className="AllText ProjectInfo">
                {data["long-description"] && <p className="ProjectDescription">{data["long-description"]}</p>}
            </div>
            <div className="List">
                {renderLargeProj}
                {/* {renderSmallProj} */}
            </div>
            <BackButton text="Back"/>
            {viewing && <ImageViewer image={viewing} onClose={closeViewer}/>}
        </div>
    )
}

export default PlotterArt;
