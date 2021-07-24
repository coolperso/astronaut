var bg,sleep
var brush,gym
var eat,drink
var move,astronaut,bathing





function preload(){
  bg=loadAnimation("iss.png")
  sleep=loadAnimation("sleep.png")
  brush=loadAnimation("brush.png")
  gym=loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png")
  eat=loadAnimation("eat1.png","eat2.png")
  drink=loadAnimation("drink1.png","drink2.png")
  move=loadAnimation("move.png","move1.png")
  bathing=loadAnimation("bath1.png","bath2.png")
}


function setup() {
  createCanvas(800,400);
 astronaut=createSprite(300,230)
 astronaut.addAnimation("sleeeping",sleep)
 astronaut.scale=0.1
 
}

function draw() {
  background(255,255,255);
   if(keyDown("Up_ARROW")) {
     astronaut.addAnimation("brushing",brush)
     astronaut.changeAnimation("brushing")
     astronaut.y=350;
     astronaut.velocityX=0
     astronaut.velocityY=0
   }
   if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("workout",gym)
    astronaut.changeAnimation("workout")
    astronaut.y=350;
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=350;
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bath",bathing)
    astronaut.changeAnimation("bath")
    astronaut.y=350;
    astronaut.velocityX=0
    astronaut.velocityY=0
  }
  if(keyDown("M_KEY")) {
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving")
    astronaut.y=350;
    astronaut.velocityX=2
    astronaut.velocityY=3
  }



  drawSprites();
}