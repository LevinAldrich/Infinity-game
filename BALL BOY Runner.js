  
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var BALLBOY, BALLBOYImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  BALLBOYImg = loadImage("BALL BOY.jpg");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  BALLBOY = createSprite(200,200,50,50);
 BALLBOY.scale = 0.3;
  BALLBOY.addImage("BALLBOY", BALLBOYImg);
}


function draw() {
  background(255);
 if(tower.y > 450){
      tower.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("LEFT_ARROW")){
        BALLBOY.x = BALLBOY.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("RIGHT_ARROW")){
  
          BALLBOY.x = BALLBOY.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("Space")){
  
         BALLBOY.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
  
  BALLBOY.velocityY = BALLBOY.velocityY + 0.8;
    
      spawnDoors();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
     if(climbersGroup.isTouching(BALLBOY)){
      BALLBOY.velocityY = +0.8;
    }
    if(invisibleBlockGroup.isTouching(BALLBOY) || BALLBOY.y > 600){
      BALLBOY.destroy()
      gameState = "End";
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    //
    door.addImage(doorImg);
    climber.addImage(climberImg);
    door.x = door = Math.round(random(100,500));
    console.log(door)
    door.velocityY = 1;
    climber.x = door.x;
    invisibleBlock.x = door.x;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the ghost and door
    
     
BALLBOY.depth = door.depth;
    BALLBOY.depth +=1;
    
    //assign lifetime for the  door, climber and invisible block

  door.lifetime = 800;
   climber.lifetime = 800;
    invisisble.lifetime = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

