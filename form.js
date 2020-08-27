class Form{
    constructor(){
    this.ansInput= createInput("answer");
    
    }
    display(){
        this.ansInput.position(displayWidth/9,displayHeight-800);
    }
    generateQuestions() {
     var num1 =Math.round(random(1,100)) 
     var num2 =Math.round(random(1,100)) 
     var operations=["+","-","*","/"]     
     var randomIndex=Math.round(random(0,3))
     question = num1+operations[randomIndex]+num2;
     posY = 300
     if(randomIndex==0){
      answer = num1+num2   
     }

     if(randomIndex==1){
        answer = num1-num2   
     }

     if(randomIndex==2){
     answer = num1*num2   
     }

     if(randomIndex==3){
     answer =Math.round(num1/num2)    
     }

     
    }
}
