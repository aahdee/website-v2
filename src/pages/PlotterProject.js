import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../utils/BackButton";
import ImageViewer, { ZoomableImage } from "../utils/ImageViewer";
import data from "./portfolioData/plotterData.json"
import "./Plotter.css"


//Individual page for a large plotter project: /plotter/<id>
function PlotterProject(){
    const { projectId } = useParams()
    const [viewing, setViewing] = useState(null)
    const closeViewer = () => setViewing(null)

    const project = data.largeProjects.find((p) => p.id === projectId)

    if (!project){
        return(
            <div className="subpage PlotterPage">
                <p className="Title">Project not found</p>
                <BackButton text="Back"/>
            </div>
        )
    }

    const photos = (project.photos || []).map((photo, i) => {
        // Optional per-photo text ("caption" still works as an older name)
        const description = photo.description || photo.caption
        const alt = description || `${project.name} photo ${i + 1}`
        return(
            <figure className="GalleryItem" key={photo.imageLink + i}>
                <ZoomableImage
                    className="GalleryImg"
                    src={require(`${photo.imageLink}`)}
                    alt={alt}
                    description={description}
                    onOpen={setViewing}
                />
                {description && <figcaption className="GalleryCaption">{description}</figcaption>}
            </figure>
        )
    })

    return(
        <div className="subpage PlotterPage">
            <p className="Title">{project.name}</p>
            {(project.year || project.longDescription) && (
                // Same translucent box as the About page text, for readability
                <div className="AllText ProjectInfo">
                    {project.year && <div className="ProjectYear">{project.year}</div>}
                    {project.longDescription && <p className="ProjectDescription">{project.longDescription}</p>}
                </div>
            )}
            <div className="Gallery">
                {photos}
            </div>
            <BackButton text="Back"/>
            {viewing && <ImageViewer image={viewing} onClose={closeViewer}/>}
        </div>
    )
}

export default PlotterProject;
