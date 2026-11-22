/*
  Generates small .thumb.webp copies of every JPG/PNG in the portfolio image
  folder, so pages can show lightweight thumbnails and only load the original
  high-res file when it's opened in the image viewer.

    photo.jpg  ->  photo.thumb.webp   (same folder, max 800px wide)

  Usage:  npm run thumbs
  Requires ffmpeg on your PATH. Only new or changed images are processed.
  Commit the generated .thumb.webp files along with the originals.
*/
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const IMG_DIR = path.join(__dirname, "..", "src", "pages", "portfolioData", "imgs");
const MAX_WIDTH = 800; // ~2x the on-screen tile size, so thumbs stay sharp on retina screens
const QUALITY = 80;

// Read the EXIF orientation tag from a JPEG (phones store rotation here instead
// of rotating the pixels). Browsers honour it but ffmpeg doesn't, so we apply it.
function jpegOrientation(file) {
  const buf = fs.readFileSync(file);
  if (buf.readUInt16BE(0) !== 0xffd8) return 1;
  let offset = 2;
  while (offset + 4 < buf.length) {
    const marker = buf.readUInt16BE(offset);
    const size = buf.readUInt16BE(offset + 2);
    if (marker === 0xffe1 && buf.toString("ascii", offset + 4, offset + 8) === "Exif") {
      const tiff = offset + 10;
      const little = buf.toString("ascii", tiff, tiff + 2) === "II";
      const u16 = (o) => (little ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
      const u32 = (o) => (little ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
      const ifd = tiff + u32(tiff + 4);
      const entries = u16(ifd);
      for (let i = 0; i < entries; i++) {
        const entry = ifd + 2 + i * 12;
        if (u16(entry) === 0x0112) return u16(entry + 8);
      }
      return 1;
    }
    if ((marker & 0xff00) !== 0xff00 || marker === 0xffda) break; // start of image data
    offset += 2 + size;
  }
  return 1;
}

const ORIENTATION_FILTERS = {
  2: "hflip",
  3: "hflip,vflip",
  4: "vflip",
  5: "transpose=0",
  6: "transpose=1",
  7: "transpose=3",
  8: "transpose=2",
};

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const sources = walk(IMG_DIR).filter(
  (f) => /\.(jpe?g|png)$/i.test(f) && !/\.thumb\./i.test(f)
);

let made = 0;
for (const src of sources) {
  const out = src.replace(/\.(jpe?g|png)$/i, ".thumb.webp");
  if (fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs) continue;

  const filters = [];
  if (/\.jpe?g$/i.test(src)) {
    const rotate = ORIENTATION_FILTERS[jpegOrientation(src)];
    if (rotate) filters.push(rotate);
  }
  filters.push(`scale='min(${MAX_WIDTH},iw)':-1`);

  execFileSync("ffmpeg", [
    "-y", "-loglevel", "error",
    "-i", src,
    "-vf", filters.join(","),
    "-quality", String(QUALITY),
    out,
  ]);
  made++;
  const kb = (n) => Math.round(fs.statSync(n).size / 1024);
  console.log(`${path.relative(IMG_DIR, src)}  ${kb(src)}KB -> ${kb(out)}KB`);
}
console.log(`Thumbnails: ${made} created, ${sources.length - made} up to date.`);
