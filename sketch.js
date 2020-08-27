var formObj,question;
var posX = 400
var posY = 300
var answer;
var userAns;
var backGround,playerImg,treeImg,cutterImg,tree1,tree2,tree3,gameImg;
var player,tree;
var chance
var firstQuestion
var cuttingSound,laughSound;
var gameState
var PLAY
var END
var reset
function preload() {
  backGround = loadImage("sprites/bg.png");
  gameImg = loadImage("sprites/game.png")
  
  cuttingSound = loadSound("sounds/cutting.mp3")
  laughSound = loadSound("sounds/laugh.mp3")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  formObj = new Form();
  formObj.display();
  chance = 4;
  
  firstQuestion=0

  PLAY=1
  END=0
  gameState = PLAY

  player = new Player();
  tree = new Tree();
}

function draw() {
 background(backGround); 
 // formObj.generateQuestions(); 
 if (gameState==PLAY) {
  background(backGround); 
  spawnQuestions();
  player.display();
  tree.display();
 
  textSize(100);
  fill(255)
  text(question,posX,posY);
  text(chance,displayWidth/2,displayHeight-1000)
  posY = posY + 5;
 userAns = formObj.ansInput.value();
 console.log(userAns)
 if(userAns==answer){
   posY = displayHeight+1;
 }

}
function spawnQuestions() {
 if(posY>displayHeight){
   if (userAns!=answer&&firstQuestion==1) {
     laughSound.play();                       
     chance = chance-1;
   }
   firstQuestion = 1
formObj.generateQuestions();

if (chance==0) {
  gameState=END
}
 }
  
 } 
 if (gameState==END) {
  background(gameImg); 
 }
 
   
 


}