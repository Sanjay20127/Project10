var seaImg=loadImage("sea.png");
var shipAmime=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
var sea, ship;
function preload(){

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX=-5;
  if(sea.x<0){
    sea.x=sea.width/2;
  }
  ship=createSprite(50,50,60,200);
  ship.addAnimation(shipAmime);
}

function draw() {
  background("blue");
  drawSprites();
}