import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./ImageViewer.css"

// Full-size image overlay. Closes on backdrop click, the × button, or Escape.
// `image` is { src, alt, description? }.
function ImageViewer(props){
    const { image, onClose } = props

    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", onKeyDown)
        // Stop the page behind the overlay from scrolling
        const prevOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"
        return () => {
            document.removeEventListener("keydown", onKeyDown)
            document.body.style.overflow = prevOverflow
        }
    }, [onClose])

    return createPortal(
        <div
            className="ImageViewer"
            role="dialog"
            aria-modal="true"
            aria-label={image.alt}
            onClick={onClose}
        >
            <button
                type="button"
                className="ImageViewerClose"
                onClick={onClose}
                aria-label="Close image viewer"
                autoFocus
            >
                ×
            </button>
            {/* Clicking the photo or its description shouldn't close the viewer */}
            <figure className="ImageViewerFigure" onClick={(e) => e.stopPropagation()}>
                <img
                    className="ImageViewerImg"
                    src={image.src}
                    alt={image.alt}
                />
                {image.description && (
                    <figcaption className="ImageViewerDescription">{image.description}</figcaption>
                )}
            </figure>
        </div>,
        document.body
    )
}

// Clickable image that opens the viewer via `onOpen({ src, alt })`
export function ZoomableImage(props){
    return(
        <button
            type="button"
            className="ZoomableImage"
            onClick={() => props.onOpen({ src: props.src, alt: props.alt, description: props.description })}
            aria-label={`View ${props.alt} full size`}
        >
            <img className={props.className} src={props.src} alt={props.alt}/>
        </button>
    )
}

export default ImageViewer
