import CustomBox from "./CustomBox";
export default class ThreeDHeart {
  constructor(x, y) {
    this.size = 250;
    this.x = x;
    this.y = y;
    this.globalXAngle = -45;
    this.globalYAngle = 45;
    this.xAngle = 0;
    this.yAngle = 0;
  }

  draw(p5) {
    let ratio = this.size / 100;
    this.drawBox(p5, 0, 0, 0);
    this.drawBox(p5, 50 * ratio, -50 * ratio, 35 * ratio);
    this.drawBox(p5, -35 * ratio, -50 * ratio, -50 * ratio);
  }

  rotateX(p5) {
    if (p5.frameCount % 360 <= 180) {
      let arg = p5.map(p5.frameCount % 360, 0, 180, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.xAngle = p5.map(result, 0, 1, 0, 180);
    } else {
      let arg = p5.map(p5.frameCount % 360, 180, 359, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.xAngle = p5.map(result, 0, 1, 180, 359);
    }
  }

  rotateY(p5) {
    if (p5.frameCount % 360 <= 180) {
      let arg = p5.map(p5.frameCount % 360, 0, 180, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.yAngle = p5.map(result, 0, 1, 0, 180);
    } else {
      let arg = p5.map(p5.frameCount % 360, 180, 359, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.yAngle = p5.map(result, 0, 1, 180, 359);
    }
  }

  rotateType1(p5) {
    if (p5.frameCount % 360 <= 180) {
      let arg = p5.map(p5.frameCount % 360, 0, 180, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.yAngle = p5.map(result, 0, 1, 0, 180);
    } else {
      let arg = p5.map(p5.frameCount % 360, 180, 359, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.yAngle = p5.map(result, 0, 1, 180, 360);
    }
  }
  rotateType2(p5) {
    if (p5.frameCount % 360 <= 180) {
      let arg = p5.map(p5.frameCount % 360, 0, 180, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.xAngle = p5.map(result, 0, 1, 0, 180);
    } else {
      let arg = p5.map(p5.frameCount % 360, 180, 359, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.xAngle = p5.map(result, 0, 1, 180, 360);
    }
  }
  rotateType3(p5) {
    if (p5.frameCount % 360 <= 180) {
      let arg = p5.map(p5.frameCount % 360, 0, 180, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.yAngle = p5.map(result, 0, 1, 0, 180);
      this.xAngle = p5.map(result, 0, 1, 0, 180);
    } else {
      let arg = p5.map(p5.frameCount % 360, 180, 359, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.yAngle = p5.map(result, 0, 1, 180, 360);
      this.xAngle = p5.map(result, 0, 1, 180, 360);
    }
  }
  rotateType4(p5) {
    if (p5.frameCount % 360 <= 180) {
      let arg = p5.map(p5.frameCount % 360, 0, 180, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.yAngle = p5.map(result, 0, 1, 0, 360);
      this.xAngle = p5.map(result, 0, 1, 0, 180);
    } else {
      let arg = p5.map(p5.frameCount % 360, 180, 359, 0, 1);
      let result = this.easeInOutQuint(p5, arg);
      this.yAngle = p5.map(result, 0, 1, 0, 360);
      this.xAngle = p5.map(result, 0, 1, 180, 360);
    }
  }

  rotations(p5) {
    if (p5.frameCount % 1440 < 360) this.rotateType1(p5);
    else if (p5.frameCount % 1440 < 720) this.rotateType3(p5);
    else if (p5.frameCount % 1440 < 1080) this.rotateType2(p5);
    else this.rotateType4(p5);
  }
  globalRotateY() {
    this.globalYAngle++;
  }

  easeInOutQuint(p5, x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - p5.pow(-2 * x + 2, 5) / 2;
  }
  drawBox(p5, x, y, z) {
    p5.push();
    p5.rotateX(this.globalXAngle);
    p5.rotateY(this.globalYAngle);
    p5.translate(this.x + x, this.y + y, z);
    p5.rotate(-this.xAngle, p5.createVector(1, 0, 1));
    p5.rotateY(this.yAngle);
    let b = new CustomBox(this.size);
    b.draw(p5);
    p5.pop();
    //this.yAngle++;
  }
}
