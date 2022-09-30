//modules or namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//we are creating our own physics engine inside the world
let engine;
let world;

var tower;
var backgroundimage;
var myground;
var mycannon;
var myCannonBall;
var balls = [];
var myboats;
var boats = [];
var position;
var boatsAnimation=[]
var boatImage;
var boatJson;


function preload() {
  backgroundimage = loadImage("assets/background.gif");
  boatJson=loadJSON("assets/boat/boat.json")
  boatImage=loadImage("assets/boat/boat.png")
}

//executes the code only one time
function setup() {
  createCanvas(1000, 500);
  //my own engine
  engine = Engine.create();
  //create world inside engine
  world = engine.world;
  tower = new Tower(150, 300, 150, 300);
  myground = new Ground(600, 480, 1200, 30);
  mycannon = new Cannon(200, 60, 100, 35, -PI / 4);

  var boatsFrames=boatJson.frames
  for(var i=0; i<boatsFrames.length<1 ;i+=1){
    var p=boatsFrames[i].position
    var img=boatImage.get (p.x,p.y,p.w,p.h)
    boatsAnimation.push(img)
  }
}

//executes the code multiple times
function draw() {
  background(backgroundimage);
  Engine.update(engine);

  tower.display();
  myground.display();
  mycannon.display();

  showBoats();
  for (var i = 0; i < balls.length; i += 1) {
    showBalls(balls[i], i);
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    myCannonBall = new CannonBall(mycannon.x, mycannon.y, 55);
    balls.push(myCannonBall);
  }
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length - 1].shoot();
  }
}

function showBalls(ball, index) {
  ball.display();
  if (ball.body.position.x >= width || ball.body.position.y >= height - 120) {
    Matter.World.remove(world, ball.body);
    balls.splice(index, 1);
  }
}
function showBoats() {
  if (boats.length > 1) {
    if (
      boats.length < 4 &&
      boats[boats.length - 1].body.position.x < width - 300
    ) {
      position = [-40, -60, -70, -20];
      var randompick = random(position);
      myboats = new boat(900, 360, 200, 200, randompick,boatsAnimation);
      boats.push(myboats);
    }

    for (var i = 0; i < boats.length; i += 1) {
      boats[i].display();
      boats[i].animation()

      Matter.Body.setVelocity(boats[i].body, { x: -0.5, y: 0 });
    }
  } 
  else {
    myboats = new boat(900, 360, 200, 200, -60,boatsAnimation);
    boats.push(myboats);
  }
}
