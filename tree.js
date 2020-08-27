class Tree{
    constructor(){
  this.treeImg = loadImage("sprites/tree.png");
  this.tree1 = loadImage("sprites/3.4.png");
  this.tree2 = loadImage("sprites/tree1.png");
  this.tree3 = loadImage("sprites/tree2.png");
    }
    display(){
        if(chance==4){
         image(this.treeImg,displayWidth/2,displayHeight-250)
        }
        if(chance==3){
        image(this.tree1,displayWidth/2,displayHeight-250)
        }
        if(chance==2){
        image(this.tree2,displayWidth/2,displayHeight-250)
        }
        if(chance==1){
        image(this.tree3,displayWidth/2,displayHeight-250)
        }
    }
}