//blue print
class Ground {
    constructor(x, y, w, h) {
     
      //creates a property to an object
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      //options holds always a physcial property
      var options = {
        isStatic: true,
        //create tower using matter.js
      };
      this.body = Matter.Bodies.rectangle(
        this.x,
        this.y,
        this.w,
        this.h,
        options
      );
      World.add(world, this.body);
    }
    //user defined function
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push()
      translate(pos.x, pos.y);
      rotate(angle);
      //x,y position to go in center
      noFill()
      

      noStroke()
      rectMode(CENTER);
      rect(0, 0, this.w, this.h);

      pop()
    }
  }
  