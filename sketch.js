
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObj1;
var bobObj2;
var bobObj3;
var bobObj4;
var bobObj5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;
var roof1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	 bobObj1 = new bob(250,300,60);
	 bobObj2 = new bob(310,300,60);
	 bobObj3 = new bob(370,300,60);
	 bobObj4 = new bob(430,300,60);
	 bobObj5 = new bob(490,300,60);
	 roof1 = new roof(380,100,400,30);

	 rope1 = new rope(bobObj1.body,roof1.body,-(60*2),0);
	 rope2 = new rope(bobObj2.body,roof1.body,-(60*1),0);
	 rope3 = new rope(bobObj3.body,roof1.body,0,0);
	 rope4 = new rope(bobObj4.body,roof1.body,(60*1),0); 
	 rope5 = new rope(bobObj5.body,roof1.body,(60*2),0);
	

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
bobObj1.display();
bobObj2.display();
bobObj3.display(); 
bobObj4.display(); 
bobObj5.display(); 
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
roof1.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-50,y:-45});

	}
}
