const Engine=Matter.Engine       
const World= Matter.World 
const Bodies=Matter.Bodies
       
  var ground ,options
      var ball,ballOptions
       
       function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create()
  world=engine.world
  object=Bodies.rectangle(400,200,100,100)
  World.add(world,object)
  options={isStatic:true}
  ground=Bodies.rectangle(windowWidth/2,windowHeight-100,windowWidth,100,options)
  World.add(world,ground)
  ballOptions={restitution:1.5}
ball=Bodies.circle(windowWidth/2,100,20,ballOptions)
World.add(world,ball)
}

function draw() {
  background(255,255,0);
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40)
  rectMode(CENTER) 
  rect(object.position.x, object.position.y, 100, 100); 
  rect(ground.position.x,ground.position.y,windowWidth,100)
  drawSprites();
}