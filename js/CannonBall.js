class CannonBall {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.trajetroy=[]

    var options = {
      isStatic: true,
    
    };

    this.image = loadImage("../assets/cannonball.png");
    this.body = Matter.Bodies.circle(this.x, this.y, this.r, options);
    World.add(world, this.body);
  }
  shoot() {
    var Velocity = p5.Vector.fromAngle(mycannon.angle);
    Velocity.mult(15);

    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: Velocity.x, y: Velocity.y });
  }
  display() {
    
    var pos = this.body.position;
    var angle = this.body.angle;
    if(this.body.position.x>244){
      var position=[pos.x,pos.y]
      this.trajetroy.push(position)
    }   
     

    for(var i=0;i<this.trajetroy.length;i+=1){
      image(this.image,this.trajetroy[i][0],this.trajetroy[i][1],8,8)
    }
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
  }
}
