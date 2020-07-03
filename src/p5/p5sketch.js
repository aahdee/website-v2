import React, { Component } from "react";
import Sketch from "react-p5";
import CustomBox from "./CustomBox";

export default class P5Sketch extends Component {
  constructor() {
    super();
    this.bx = new CustomBox(100);
  }
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(
      canvasParentRef
    ); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.angleMode(p5.DEGREES);
  };
  draw = (p5) => {
    p5.background(0);
    p5.ambientLight(255);
    p5.orbitControl();
    this.axis(p5, 3);
    this.bx.draw(p5);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    //this.x++;
  };
  axis = (p5, weight) => {
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
  windowResized = (p5) => {
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  };
  render() {
    return (
      <Sketch
        className="P5Sketch"
        setup={this.setup}
        draw={this.draw}
        windowResized={this.windowResized}
      />
    );
  }
}
