var path,Runner,coin,energyDrink,power;
var pathImg;
var treasureCollection = 0;
//grupos

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("path.png");
  RunnerImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
  endImg =loadAnimation("fimdeJogo.png");
}

function setup(){



path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;



Runner = createSprite(width/2,height-20,20,20);
Runner.addAnimation("Runnerimg");
Runner.scale=0.08;
  
  
coinG=new Group();
energyDrinkG=new Group();
powerG=new Group();


}

function draw() {

  if(gameState===PLAY){
  background(0);
  Runner.x = World.mouseX;
  
  edges= createEdgeSprites();
  Runner.collide(edges);
  

  if(path.y > height ){
    path.y = height/2;
  }
  
    createcoin();
    createenergyDrink();
    createpower();
    
  
    if (coinG.isTouching(Runner)) {
      coinG.destroyEach();
      treasureCollection=treasureCollection + 50;
    
    }else if (energyDrinkG.isTouching(Runner)) {
      energyDrinkG.destroyEach();
      treasureCollection=treasureCollection + 100;
      
    }else if (powerG.isTouching(Runner)) {
      powerG.destroyEach();
      treasureCollection= treasureCollection + 150;
      
    }else{
        
      Runner.addAnimation("runnerimg",endImg);
      Runner.x=width/2;
      Runner.y=height/2;
      Runner.scale=0.6;
        
        coinG.destroyEach();
        energyDrinkG.destroyEach();
        powerG.destroyEach();
        
        
        coinG.setVelocityYEach(0);
       energyDrinkG.setVelocityYEach(0);
        powerG.setVelocityYEach(0);
       
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tesouro: "+ treasureCollection,width-150,30);
  }

 

function createcoin() {
  if (World.frameCount % 200 == 0) {
  var coin = createSprite(Math.round(random(50, width-50),40, 10, 10));
coin.addImage(coinImg);
coin.scale=0.12;
coin.velocityY = 5;
coin.lifetime = 200;
coin .add(coin);
} 
}

function createenergyDrink() {
  if (World.frameCount % 320 == 0) {
  var energyDrink = createSprite(Math.round(random(50, width-50),40, 10, 10));
  energyDrink .addImage(energyDrinkImg);
  energyDrink.scale=0.03;
  energyDrink.velocityY = 5;
  energyDrink.lifetime = 200;
  energyDrinkg.add(energyDrink);
}
}

function createpower() {
  if (World.frameCount % 410 == 0) {
  var power = createSprite(Math.round(random(50, width-50),40, 10, 10));
power.addImage(powerImg);
power.scale=0.13;
power.velocityY = 5;
power.lifetime = 200;
powerG.add(power);
  }
}

