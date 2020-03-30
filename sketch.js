const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17;
var ball,slingshot;

function setup() {
  createCanvas(1200,800);
 engine=Engine.create();
 world=engine.world;
 ball = new Particle(100,450,50);
slingshot = new Slingshot(ball.body,{x:100,y:475});
ground = new Ground(600,650,1200,20);
box1 = new Boxgreen(400,540,80,80);
box2 = new Boxgreen(480,540,80,80);
box3 = new Boxgreen(560,540,80,80);
box4 = new Box(440,430,70,70);
box5 = new Box(510,430,70,70);
box6 = new Box(475,335,60,60);
ground2 = new Ground(800,350,400,20);
box7 = new Boxorg(680,230,60,60);
box8 = new Boxorg(740,230,60,60);
box9 = new Boxorg(800,230,60,60);
box10 = new Boxorg(860,230,60,60);
box11= new Boxorg(920,230,60,60);
box12 = new Boxgreen(740,170,60,60);
box13 = new Boxgreen(800,170,60,60);
box14 = new Boxgreen(860,170,60,60);
box15 = new Box(770,110,60,60);
box16 = new Box(830,110,60,60);
box17 = new Box(800,50,60,60);
}



function draw() {
  background("white"); 
  Engine.update(engine); 
  ground.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  ball.display();
  slingshot.display();
 
}
   
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly();                                           
}












