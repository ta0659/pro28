const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	treeImg=loadImage("tree.png")
	boyImg=loadImage("boy.png")
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	tree=createSprite(900,300,100,100);
	tree.addImage(treeImg);

	boy=createSprite(200,500,30,10);
	boy.addImage(boyImg);

	m1=new Mango(805,150);
	m2=new Mango(820,220);
	m3=new Mango(910,110)
	m4=new Mango(850,110)
	m5=new Mango(900,200);
	m6=new Mango(1000,190)



	stone=new Bird(260,470)
	
	slingshot=new SlingShot(stone.body,{x:270, y:470});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  stone.display();

  tree.display();

  m1.display();
  m3.display();
  m4.display();
  m5.display();
  m2.display();
  m6.display();

  ground.display();
  
  drawSprites();
 
}


function mouseDragged(){Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});}

function mouseReleased(){ slingshot.fly();}

