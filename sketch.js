var movingRec,staticRec;

function setup() {

  createCanvas(800,400);
  staticRec=createSprite(200, 200, 50, 80);
  staticRec.shapeColor="green";
  movingRec=createSprite(400,200,80,30);
  movingRec.shapeColor="green";

}

function draw() {
  background(255,255,255);  
  movingRec.x=World.mouseX;
  movingRec.y=World.mouseY;

  if((movingRec.x-staticRec.x<=movingRec.width/2 +staticRec.width/2) && 
      (staticRec.x-movingRec.x<=movingRec.width/2+staticRec.width/2) &&
      (movingRec.y-staticRec.y<=movingRec.height/2+staticRec.height/2) &&
      (staticRec.y-movingRec.y<=movingRec.height/2+staticRec.height/2)){
    movingRec.shapeColor="red";
    staticRec.shapeColor="red";
  }
else{
  movingRec.shapeColor="green";
  staticRec.shapeColor="green";
}
  drawSprites();
}