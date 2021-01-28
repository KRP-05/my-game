
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ball1,ground,attacher


function setup() {
	createCanvas(3000,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground  =new Ground(750,600,1500,20)
//platform  =new Ground(600,600,1000,400)
ball1 = new ball(250,200,80,80)
attacher  =new rope(ball1.body,{x:650,y:100})
box1 = new box(800,550,75,75)
box2 = new box(800,450,75,75)
box3 = new box(800,350,75,75)
box4 = new box(800,250,75,75)
box5 = new box(800,150,75,75)
box6 = new box(800,50,75,75)

box7 = new box(900,550,75,75)
box8 = new box(900,470,75,75)
box9 = new box(900,390,75,75)
box10 = new box(900,310,75,75)
box11 = new box(900,230,75,75)
box12= new box(900,150,75,75)
box13= new box(900,70,75,75)
box14= new box(900,0,75,75)

box15 = new box(1000,550,75,75)
box16 = new box(1000,450,75,75)
box17 = new box(1000,350,75,75)
box18 = new box(1000,250,75,75)
box19 = new box(1000,150,75,75)
box20 = new box(1000,50,75,75)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  ground.display()
  //platform.display()
  ball1.display()
  attacher.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  drawSprites();
 
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
    //}
}


