import React, { Suspense } from "react";
import { P5Canvas } from "@p5-wrapper/react";
import ThreeDHeart from "./ThreeDHeart";

const setOrtho = (p5) => {
  p5.ortho(
    -p5.width / 2,
    p5.width / 2,
    -p5.height / 2,
    p5.height / 2,
    0.1,
    2000
  );
};

// Debug helper: draws the x (red), y (green), z (blue) axes.
// eslint-disable-next-line no-unused-vars
const axis = (p5, weight) => {
  p5.push();
  p5.strokeWeight(weight);
  p5.stroke(255, 0, 0);
  p5.line(-200, 0, 0, 200, 0, 0);
  p5.stroke(0, 255, 0);
  p5.line(0, -200, 0, 0, 200, 0);
  p5.stroke(0, 0, 255);
  p5.line(0, 0, -200, 0, 0, 200);
  p5.pop();
};

// Instance-mode sketch: defined outside the component so it isn't
// recreated (and the canvas re-mounted) on every render.
const sketch = (p5) => {
  const bx = new ThreeDHeart(0, 260);

  p5.setup = () => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    setOrtho(p5);
    p5.noStroke();
    p5.angleMode(p5.DEGREES);
  };

  p5.draw = () => {
    p5.background(244, 244, 237);
    p5.ambientLight(255);
    bx.draw(p5);
    bx.rotations(p5);
  };

  p5.windowResized = () => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight, true);
    setOrtho(p5);
  };
};

export default function P5Sketch() {
  return (
    <div className="P5Sketch">
      <Suspense fallback={null}>
        <P5Canvas sketch={sketch} loading={() => null} />
      </Suspense>
    </div>
  );
}
