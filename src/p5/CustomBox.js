export default class CustomBox {
  constructor(size) {
    this.size = size;
  }

  draw(p5) {
    //z axis
    p5.push();

    p5.translate(0, 0, this.size / 2);
    p5.plane(this.size);
    p5.ambientMaterial(179, 136, 235);
    p5.translate(0, 0, -this.size);
    p5.plane(this.size);
    p5.pop();

    //y axis
    p5.push();
    p5.translate(0, this.size / 2, 0);
    p5.rotateX(90);
    p5.ambientMaterial(179, 136, 235);
    p5.plane(this.size);
    p5.translate(0, 0, this.size);
    p5.ambientMaterial(255);
    p5.plane(this.size);
    p5.pop();

    //x axis
    p5.push();
    p5.translate(this.size / 2, 0, 0);
    p5.rotateY(90);
    p5.ambientMaterial(179, 136, 235);
    p5.plane(this.size);
    p5.ambientMaterial(255);
    p5.translate(0, 0, -this.size);
    p5.plane(this.size);
    p5.pop();
  }
}
