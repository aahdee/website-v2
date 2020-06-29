import React, { Component } from "react";
import Sketch from "react-p5";

export default class P5Sketch extends Component {
  setup = (p5, canvasParentRef) => {
    p5.createCanvas(700, 700).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };
  draw = (p5) => {
    p5.background(100);
    p5.ellipse(this.x, this.y, 70, 70);
    // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
    this.x++;
  };
  render() {
    return <Sketch className="P5Sketch" setup={this.setup} draw={this.draw} />;
  }
}
