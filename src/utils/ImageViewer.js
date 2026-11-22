import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./ImageViewer.css"

// Full-size image overlay. Closes on backdrop click, the × button, or Escape.
// `image` is { src, alt, description? }.
function ImageViewer(props){
    const { image, onClose } = props
    // High-res originals can take a moment; show a loading message until ready
    const [loaded, setLoaded] = useState(false)

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
            {!loaded && <p className="ImageViewerLoading">Loading…</p>}
            <figure
                className="ImageViewerFigure"
                onClick={(e) => e.stopPropagation()}
                hidden={!loaded}
            >
                <img
                    className="ImageViewerImg"
                    src={image.src}
                    alt={image.alt}
                    onLoad={() => setLoaded(true)}
                    onError={() => setLoaded(true)}
                />
                {image.description && (
                    <figcaption className="ImageViewerDescription">{image.description}</figcaption>
                )}
            </figure>
        </div>,
        document.body
    )
}

// Clickable image that opens the viewer.
// `src` is what's shown on the page (a small thumbnail); `fullSrc` is the
// high-res original, which is only downloaded once the viewer opens.
export function ZoomableImage(props){
    const fullSrc = props.fullSrc || props.src
    return(
        <button
            type="button"
            className="ZoomableImage"
            onClick={() => props.onOpen({ src: fullSrc, alt: props.alt, description: props.description })}
            aria-label={`View ${props.alt} full size`}
        >
            <img className={props.className} src={props.src} alt={props.alt} loading="lazy"/>
        </button>
    )
}

export default ImageViewer
