var PLAY=1;
var END=0;
var gameState=1;
var sword,fruit1,fruit2,fruit3,fruit4,swordImage,score;
var aleinImage,gameOverImage;
var knifeSound;
var gameoverSound;
function preload(){
swordImage=loadImage("sword.png");
 fruit1=loadImage("fruit1.png")
 fruit2=loadImage("fruit2.png")
 fruit3=loadImage("fruit3.png")
 fruit4=loadImage("fruit4.png")
 aleinImage=loadAnimation("alien1.png","alien2.png");
gameOverImage=loadImage("gameover.png");
knifeSound=loadSound("knifeSwooshSound.mp3");
  gameoverSound=loadSound("gameover.mp3");
}

function setup(){
 createCanvas(400, 400);
sword=createSprite(40,200,20,20);
sword.addImage(swordImage);
sword.scale=0.7
score = 0;
   enemyGroup=createGroup();
   fruitGroup=createGroup();
}


function draw(){
   background(180);
  text("Score: "+ score, 300,50);
 if (gameState === PLAY){
  sword.y=World.mouseY;
  sword.x=World.mouseX;
  fruits();
  Enemy();
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
knifeSound.play();
    score=score+2
   }
}
  if (sword.isTouching(enemyGroup)){
    gameState=END;
    gameoverSound.play();
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
       fruitGroup.setVelocityYEach(0);
    enemyGroup.setVelocityXEach(0);
    enemyGroup.setVelocityYEach(0);
    sword.addImage(gameOverImage);
    sword.x=200
    sword.y=200
  }
 drawSprites();
}

function fruits(){

  if (World.frameCount % 80 === 0){
  fruit = createSprite(400,200,20,20);
  fruit.scale=0.2;  
      fruit.velocityX=-7
      fruitGroup.add(fruit);
      fruit.setLifetime=100;
    position=Math.round(random(1,2)); 
    if(position==1)
      {
        fruit.x=0;
        fruit.addImage(fruit1) ; 
        fruit.velocityX=(7+(score/10));
      }
    else
      {
      if (position==2){
       fruit.x=400;
      }
      }
    position=Math.round(random(1,2)); 
    if(position==1)
      {
        fruit.x=400;
        fruit.addImage(fruit2) ; 
        fruit.velocityX=-(7+(score/10));
      }
    else
      {
      if (position==2){
       fruit.x=0;
      }
      }
    position=Math.round(random(1,2)); 
    if(position==1)
      {
        fruit.y=0;
        fruit.addImage(fruit3) ; 
        fruit.velocityY=(7+(score/10));
      }
    else
      {
      if (position==2){
       fruit.y=400;
      }
      }
    position=Math.round(random(1,2)); 
    if(position==1)
      {
        fruit.y=400;
        fruit.addImage(fruit4) ; 
        fruit.velocityX=-(7+(score/10));
      }
    else
      {
      if (position==2){
       fruit.y=0;
      }
      }
  }
}
    function Enemy(){
if (frameCount%200===0){
 alein=createSprite(400,200,20,20) 
 alein.addAnimation("moving",aleinImage);
 alein.y=Math.round(random(100,300));
 alein.velocityX=-(8+(score/10));
 alein.setLifetime=100;
 enemyGroup.add(alein);
}
}







