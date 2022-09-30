//blue print
class boat {
    constructor(x, y, w, h,boatsposition,boatsAnimation) {
      //parameters
      //creates a property to an object
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.speed=0.05
      this.boatsposition=boatsposition
      this.boatsAnimation=boatsAnimation
      //options holds always a physcial property
      var options = {
        isStatic: false,
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
     this.Image=loadImage("assets/boat.png")
    }
    animation(){
      this.speed+=0.05
    }
    //user defined function
    display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      var index=floor(this.speed% this.boatsAnimation.length)
      push()
      translate(pos.x, pos.y);
      rotate(angle);
      //x,y position to go in center
      // rectMode(CENTER);
      // rect(0, 0, this.w, this.h);
      imageMode(CENTER)
      image(this.boatsAnimation[index],0,this.boatsposition,this.w,this.h)
      pop()
    }
  }
  