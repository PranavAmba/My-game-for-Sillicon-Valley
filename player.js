class Player{
    constructor(){
    this.playerImg = loadImage("sprites/player.png");
    this.cutterImg = loadImage("sprites/treecutter2.png");
    
    }
    display(){
    imageMode(CENTER)
    image(this.playerImg,displayWidth/6,displayHeight-150)
    image(this.cutterImg,displayWidth-450,displayHeight-250)
    
    }
}