var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;
var movingSprite;
function preload(){
music=loadSound("music.mp3");

    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);



   // movingSprite=createSprite(random(10,750),300,20,20)
  //  movingSprite.shapeColor="white";
 //movingSprite.velocityX=3; 
  //movingSprite.velocityY=3;



    block1 = createSprite(80,580,200,30);
    block1.shapeColor = "blue";

    block2 = createSprite(290,580,250,30);
   block2.shapeColor = "orange";

block3 = createSprite(500,580,200,30);
block3.shapeColor = "red";
console.log(block3)
block4 = createSprite(700,580,200,30)
block4.shapeColor = "green";

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=4
    ball.velocityY=4

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
   // ball.bounceOff(block1);
   // ball.bounceOff(block2);
  //  ball.bounceOff(block3);
  //  ball.bounceOff(block4);
    //write code to bounce off ball from the block1 
     
   
    
  /*  if( ball.isTouching(block1)){

ball.shapeColor="blue";
ball.bounceOff(block1)

  }*/
    if(ball.isTouching(block2)){
//music.play()
ball.shapeColor="orange"
ball.bounceOff(block2)
    }
    
if(ball.isTouching(block3)){
ball.shapeColor="red"
 ball.bounceOff(block3)

}

if(ball.isTouching(block4)){
ball.shapeColor="green"
 ball.bounceOff(block4)
}



    
    
    
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
        }
    



    if(ball.isTouching(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityY=0
        ball.velocityX=0
        music.stop();
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4


    drawSprites();
}
