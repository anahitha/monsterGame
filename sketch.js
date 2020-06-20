const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ball2;
var ground1, ground2, ground3, ground4, ground5, ground6, ground7;
var ground8, ground9, ground10, ground11;
var  ground12, ground13, ground14, ground15, ground16, ground17;
var ground18, ground19, ground20, ground21, ground22;
var boxes = [];
var col = "yellow";
var num = 0

function setup() {
  createCanvas(1275,600);
  engine = Engine.create();
        world = engine.world;
  ball = new ColourBall(-100, 50, 10, "blue");
  ball2 = new Dad(600, 240, 20, "pink");
    ground1 = createSprite(500, 2, 1000, 30);
    ground1.shapeColor = "black";
    ground2 = createSprite(500, 590, 1000, 20);
    ground2.shapeColor = "black";
    ground3 = createSprite(10, 300, 20, 600);
    ground3.shapeColor = "black";
    ground4 = createSprite(990, 300, 20, 600);
    ground4.shapeColor = "black";
    ground5 = createSprite(300, 500, 20, 200);
    ground5.shapeColor = "black";
    ground6 = createSprite(900, 200, 200, 20);
    ground6.shapeColor = "black";
    ground7 = createSprite(100, 410, 250, 20);
    ground7.shapeColor = "black";
    ground8 = createSprite(200, 200, 20, 300);
    ground8.shapeColor = "black"
  ground9 = createSprite(750, 108, 20, 180); 
  ground9.shapeColor = "black";
  ground10 = createSprite(750, 450, 20, 300); 
  ground10.shapeColor = "black";
  ground11= createSprite(850, 350, 20, 200); 
  ground11.shapeColor = "black";
  ground20 = createSprite(630, 160, 100, 150); 
  ground20.shapeColor = "black";
  ground21= createSprite(850, 350, 20, 200); 
  ground21.shapeColor = "black";
  ground22= createSprite(130, 500, 120, 70); 
  ground22.shapeColor = "black";
  
  ground18 = createSprite(800, 500, 100, 20); 
  ground18.shapeColor = "black";
  ground19 = createSprite(630, 448, 100, 100); 
  ground19.shapeColor = "black";

  ground12 = createSprite(940, 500, 120, 20); 
  ground12.shapeColor = "black";
    ground13 = createSprite(500, 160, 20, 280); 
    ground13.shapeColor = "black";
    ground14 = createSprite(660, 300, 200, 20); 
    ground14.shapeColor = "black";
    ground15 = createSprite(500, 500, 20, 300); 
    ground15.shapeColor = "black";
    ground16 = createSprite(350, 180, 200, 20); 
    ground16.shapeColor = "black";
    ground17 = createSprite(370, 290, 20, 200);
    ground17.shapeColor = "black";
if(frameCount%600 === 0){
    for (var i = 1, j = 0; i < 2000; i=i+2, j++) {
      var rand = random(1, 990);
      var rando = random(-200000, 600);
      boxes[j] = new Box(rand, rando, 20, 20, "pink"); 
}}
}

function draw() {
  Engine.update(engine);
  background(col);  
  var ran = random(-2, 2);
  for (var i = 0; i < boxes.length; i++){
    boxes[i].display();
    boxes[i].body.position.y = boxes[i].body.position.y +2;
  }
  textSize(17);
  text("How to play", 1070, 30);
  text("The bigger ball is the father.", 1002, 70);
  text("To control it, use the w, a, s, ", 1002, 90);
  text("and z keys. The smaller ball on", 1002, 110);
  text("the left will be the child. It can be ", 1002, 130);
  text("controlled using the up, down, left  ", 1002, 150);
  text("and right arrow keys. The aim of ", 1002, 170);
  text("the game is for the father to catch", 1002, 190);
  text("the child, while the child runs ", 1002, 210);
  text("from the father. The child wins if", 1002, 230);
  text("he/she makes it to the room labell-", 1002, 250);
  text("-ed 'safe room'. There are two ways ", 1002, 270);
  text("you can play. one is where you can't", 1002, 290);
  text("pass through the walls. The other is ", 1002, 310);
  text("where you treat the walls as tables", 1002, 330);
  text("the child can hide under. In this ", 1002, 350);
  text("version the child doesn't need to", 1002, 370);
  text("reach the safe room to win. It's up", 1002, 390);
  text("to you which method you pick.", 1002, 410);
  text("SAFE ROOM", 810, 550);
  ball.display();
  ball2.display();  
  isTouching(ball,ground1);
  isTouching(ball,ground2);
  isTouching(ball,ground3);
  isTouching(ball,ground4);
  isTouching(ball,ground5);
  isTouching(ball,ground6);
  isTouching(ball,ground7);
  isTouching(ball,ground8);
  isTouching(ball,ground9);
  isTouching(ball,ground10);
  isTouching(ball,ground11);
  console.log(ball.body.position);
  console.log(ball.width);
  drawSprites();
}

function touchStarted() {
   col = "red";
}

function bounceOff(object1,object2){
  if (object1.body.position.x - object2.body.position.x < object2.width/2 + object1.width/2
    && object2.body.position.x - object1.body.position.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.body.position.y - object2.body.position.y < object2.height/2 + object1.height/2
    && object2.body.position.y - object2.body.position.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}


function isTouching(object1,object2){
  if (object1.body.position.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.body.position.x < object2.width/2 + object1.width/2
    && object1.body.position.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    col = "red";
    console.log("boo");
  }
  else{
    col = "yellow";
    console.log("nope");
  }
}