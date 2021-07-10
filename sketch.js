var sea, seaImg
var ship, shipImg1
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}  

function setup(){
  createCanvas(600,600);
   
  sea = createSprite(0,200,200,200);
  sea.addImage(seaImg);
  sea.x = sea.width/2;

  ship = createSprite(200,200,50,50);
  ship.addAnimation("ship",shipImg1);
  ship.scale = 0.5
  ship.x = 200
}

function draw() {
  //background("lightblue");
  sea.velocityX = -5

  console.log(sea.x);
  if (sea.x<0){
    sea.x = sea.width/2
  }

  if(keyDown("space")){
    ship.velocityX = +10
  }

  //sea.velocityY = sea.velocityY + 0.5;

  //ship.collide(sea)
  drawSprites();
}
