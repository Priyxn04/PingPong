
var ball;
var playerPaddle, computerPaddle;
 //variable to store different state of game
 var gameState = "serve";
  
 //variables to keep the score
 var compScore = 0;
 var playerScore = 0;


function setup(){
  //create the ball, playerPaddle and computerPaddle as sprite objects
  ball = createSprite(200,200,10,10);

  playerPaddle = createSprite(360,200,10,70);

  computerPaddle = createSprite(35,200,10,70);

  
 
}



function draw() {
    //clear the screen
    background("#87CEEB");
    
    if(gameState=="serve"){
      text("Press Space to start",150,180);
      
    }
    
    
    text(playerScore,215,15);
    text(compScore,180,15);
    
    //make the player paddle move with the mouse's y position
    playerPaddle.y = World.mouseY;
    
    //AI for the computer paddle
    //make it move with the ball's y position
    computerPaddle.y = ball.y;
    
    //draw line at the centre
    for (var i = 0; i < 400; i=i+20) {
      line(200,i,200,i+10);
    }
    
    
    //create edge boundaries
    //make the ball bounce with the top and the bottom edges
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    ball.bounceOff(playerPaddle);
    ball.bounceOff(computerPaddle);
  
  
    //serve the ball when space is pressed
    if (keyDown("space")&&gameState=="serve") {
      serve();
      gameState = "play";
    }
    
   
    //reset the ball to the centre if it crosses the screen
    if(ball.x > 400 || ball.x <0) {
      if(ball.x>400){
        compScore+=1;
      }
      if(ball.x<400){
        playerScore+=1;
      }
      reset();
    }
    
    if(compScore==5||playerScore==5){
      game_state="over";
      text("GAME OVER",160,160);
      text("Press 'R' to restart",150,180);
    }
    
    if(keyDown("R")&&gameState=="over"){
      gameState="serve";
      compScore=0;
      playerScore=0;
      
    }
    
    
    drawSprites();
}

function serve() {
  ball.velocityX = 3;
  ball.velocityY = 4;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}
