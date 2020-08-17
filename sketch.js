var fixedRec,movingRec;
var gameObject1,gameObject2,gameObject3,gameObject4;
var fixedRec1,movingRec1
function setup() {
  createCanvas(1200,800);
  
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";

  fixedRec1 = createSprite(600,100,50,80);
  fixedRec1.shapeColor = "blue";
  movingRec1 = createSprite(600,800,80,30);
  movingRec1.shapeColor = "blue";


  movingRec = createSprite(400,200,80,30)
  movingRec.shapeColor = "green";
  fixedRec1.velocityY = 5;
  movingRec1.velocityY = -5;
}

function draw() {
  background(0,0,0); 
  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY; 
  if(isTouching(movingRec,gameObject1) === true) {
      movingRec.shapeColor = "red";
      gameObject1.shapeColor = "red";
    }
    else{
      movingRec.shapeColor = "green";
      gameObject1.shapeColor = "green";
    }

    bounceOff(movingRec1,fixedRec1)
  
  drawSprites();
}
