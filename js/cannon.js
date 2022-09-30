class Cannon {
  constructor(x, y, w, h, angle) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.angle = angle;
  }

  display() {
    if (keyIsDown(LEFT_ARROW)&& this.angle>-1) {
      this.angle -= 0.02;
    }
    if (keyIsDown(RIGHT_ARROW)&&this.angle<1 ) {
      this.angle += 0.02;
    }
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rectMode(CENTER);
    fill("grey");
    rect(0, 0, this.w, this.h);
    pop();
    fill("grey");
    arc(150, 155, 140, 210, PI, TWO_PI);
  }
}
