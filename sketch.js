
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new Dustbin(1200,650)
  
	paperObj=new Ball(200,450,40)

  groundObj=new Ground(width/2,670,width,20)

	Engine.run(engine);


	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbinObj.display()
  paperObj.display()
  groundObj.display()


  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    
     Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:130,y:-145})


}


}


