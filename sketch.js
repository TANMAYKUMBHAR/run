var score;
var bg,bgi;
var cat,cati;
var rat,rati;
var cheese,cheesei;
var enemyGroup;
var foodGroup;
var PLAY=1;
var END=0;
var gameState=PLAY;
var restart,restarti;


function preload(){
bgi=loadImage("kitchen.png")  ;
cati=loadImage("cat.png")  ;
rati=loadImage("rat.png");
cheese=loadImage("cheese.png");
restarti=loadImage("restart.png");
 
}

function setup() {
createCanvas(570,272);
  
bg = createSprite(280,135,700,500);
bg.addImage(bgi);
bg.scale=0.3;

restart=createSprite(200,200,20,20);
restart.addImage(restarti);
restart.scale=0.5;
restart.visible=false;
  
rat=createSprite(200,200,20,20) 
rat.addImage(rati);
rat.scale=0.5;    

  

score = 0;
}

function draw() {
background(200);
  
c();
f();  

}



function c(){
  if(frameCount%80===0){
    cat=createSprite(200,200,20,20) 
    cat.addImage(cati);
    cat.scale=0.5;
    cat.velocity=-5;
    cat.setLifetime=100;
  }
}


function f (){
  if(frameCount%60===0){
     cheese=createSprite(200,200,20,20) 
    cheese.addImage(cheesei);
    cheese.scale=0.5;
    cheese.velocity=-5;
    cheese.setLifetime=100
     }
}