var END=0;
var PLAY=1;
var gameState = PLAY; 
var sword;
var fruitGroup;
var enemyGroup;
var score;

function preload(){
 swordImg=loadImage("sword.png"); 
  
 fruit1Img=loadImage("fruit1.png"); 
 fruit2Img=loadImage("fruit2.png"); 
 fruit3Img=loadImage("fruit3.png"); 
 fruit4Img=loadImage("fruit4.png"); 
 
 gameoverImg=loadImage("gameover.png");
 
 alien1Img=loadImage("alien1.png");
 alien2Img=loadImage("alien2.png");
  
 sound1 = loadSound("knifeSwooshSound.mp3");
 sound2 = loadSound("gameover.mp3");
}
function setup(){
  
  createCanvas(600,600);
   
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
   sword=createSprite(100,200,20,20);
   sword.addImage(swordImg);
   sword.scale=0.5;
  
  score = 0;
}
function draw(){
  
    background("white");
  
    fruits();
    enemy();

  position = Math.round(random(1,2));
    

  
text("Score :" + score,300,30);
  
  if(gameState === PLAY){
 
   sword.x=World.mouseX;
    sword.y=World.mouseY;      
  
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score = score+2; 
      sound1.play();
    }  
  
  if(World.frameCount % 55 == 0){
     fruit=createSprite(600,0,20,20);
     fruit.scale=0.2;
     r=Math.round(random(1,4));
     if(r == 1){
       fruit.addImage(fruit1Img);
     }else if(r == 2 ){
       fruit.addImage(fruit2Img);
     }else if(r == 3){
       fruit.addImage(fruit3Img);
     }else if(r == 4){
       fruit.addImage(fruit4Img);
     } 
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX=-7;
    fruit.lifetime=140;
     
      if(position === 1){
    fruit.x=600;
    fruit.velocityX=-(7+(score/10));
  } 
  else
  {
    if(position === 2){
      fruit.x=0;
       fruit.velocityX=(7+(score/4));
    }
  }
    
    fruitGroup.add(fruit);
  }   
    
     if(World.frameCount % 200 == 0){
   monster = createSprite(600,200,20,20);
   monster.addAnimation("alien1.png",alien1Img);
   monster.y=Math.round(random(100,300));
   monster.velocityX=-(8+(score/10));
   monster.setLifetime=50;
   
   enemyGroup.add(monster);
 } 
    
  }else if(gameState === END){
    
    monster.velocityX=0;
    fruit.velocityX=0;
    
   
    
    sword.addImage(gameoverImg);
    sword.x=280;
    sword.y=250;
    sword.scale=1.5;
    enemyGroup.destroyEach();
    fruitGroup.destroyEach();
    
  }
  
  if(enemyGroup.isTouching(sword)){
    gameState = END;
    sound2.play();
  }
  
  
  
  console.log("this gameState is" , gameState);
  
    drawSprites();
}
function fruits(){
  
}
function enemy(){

  
  
}