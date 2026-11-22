// Helpers for portfolio image paths from the JSON data files
// (e.g. "./portfolioData/imgs/plotter/baubles/b1.png").
//
// This file must stay in src/pages: webpack resolves these dynamic require()
// paths relative to the file that calls require.

// Original, full-resolution image. Only load this when it's actually needed
// (e.g. in the image viewer).
export function fullImage(link){
    return require(`${link}`)
}

// Small thumbnail made by `npm run thumbs` (photo.jpg -> photo.thumb.webp).
// Falls back to the original if no thumbnail exists yet (e.g. GIFs, or a new
// image you haven't run the script for).
export function thumbImage(link){
    const thumb = link.replace(/\.(jpe?g|png)$/i, ".thumb.webp")
    if (thumb !== link){
        try {
            return require(`${thumb}`)
        } catch (e) {
            // no thumbnail generated, use the original
        }
    }
    return require(`${link}`)
}
