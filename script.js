var canvasWidth = 500, canvasHeight = 400;
var myBall;
var ballSize = 10;
console.log(ballSize)
var myBall_xPos = canvasWidth/2, 
    myBall_yPos = canvasHeight/2, myBall_xVel = 1, myBall_yVel = 1,  
    myBall_top = myBall_yPos - ballSize/2,
    myBall_bottom = myBall_yPos + ballSize/2, 
    myBall_left = myBall_xPos - ballSize/2,
    myBall_right = myBall_xPos + ballSize/2;
var paddleWidth = 9, 
    paddleHeight = 46, 
    paddleVel = 5, 
    paddleL_yPos = canvasHeight/2, 
    paddleR_yPos = canvasHeight/2, 
    paddleL_xPos = ballSize,
    paddleR_xPos = canvasWidth-ballSize,
    paddleL_top = paddleL_yPos - paddleHeight/2,
	  paddleL_bottom = paddleL_yPos + paddleHeight/2,
	  paddleR_top = paddleR_yPos - paddleHeight/2,
	  paddleR_bottom = paddleR_yPos + paddleHeight/2,
    paddleL_left = paddleL_xPos + paddleWidth/2,
    paddleL_right = paddleL_xPos -  paddleWidth/2,
    paddleR_left= paddleL_xPos + paddleWidth/2,
    paddleR_right = paddleL_xPos -  paddleWidth/2;    
var score = 0;
var r = 0, g = 0, b = 0;


function setup() {
	createCanvas(canvasWidth, canvasHeight);
  background(color(0,0,100));
  rectMode(CENTER);
  myBall = rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
  
 //console.log(myBall);
 myBall_xVel = random(-4,4);
 myBall_yVel = random(-4,4);

 rect(50, canvasHeight/2, paddleWidth, paddleHeight);
}

function draw() {
 background(color(r, g, b));
 rect(paddleL_xPos, paddleL_yPos, paddleWidth, paddleHeight);
 rect(paddleR_xPos, paddleR_yPos, paddleWidth, paddleHeight);
 moveAndBounce();
 paddleControl();
 collision();
 showScore();
 // this makes the ball appear
 rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
}

function moveAndBounce(){
	myBall_xPos  = myBall_xPos + myBall_xVel;
	myBall_left  = myBall_xPos - ballSize/2;
	myBall_right = myBall_xPos + ballSize/2;

  // this makes the ball go back and forth horizontal
  if ((myBall_xPos > canvasWidth) || (myBall_xPos < 0)){
    myBall_xVel = -myBall_xVel;
  }
	myBall_yPos  = myBall_yPos + myBall_yVel;
	myBall_left  = myBall_yPos - ballSize/2;
	myBall_right = myBall_yPos + ballSize/2;
 // this makes the ball go back and forth vertical
  if ((myBall_yPos > canvasHeight) || (myBall_yPos < 0)){
    myBall_yVel = -myBall_yVel;
  }
}

function switchTheColor(){
 r = random(255);
 g = random(255);
 b = random(255);
}

function paddleControl(){
  paddleL_top    = paddleL_yPos - paddleHeight/2; paddleL_bottom = paddleL_yPos + paddleHeight/2; paddleR_top    = paddleR_yPos - paddleHeight/2; paddleR_bottom = paddleR_yPos + paddleHeight/2;    
   // Update Values
  // If the value is pressed, move the paddle up on the screen
 if (keyIsDown(87) && (paddleL_top > 0)) {
		paddleL_yPos -= paddleVel;
	} else if (keyIsDown(83) && (paddleL_bottom < canvasHeight)) {
		paddleL_yPos += paddleVel;
	}
	if (keyIsDown(80) && (paddleR_top > 0)) {
		paddleR_yPos -= paddleVel;
	} else if (keyIsDown(76) && (paddleR_bottom < canvasHeight)) {
		paddleR_yPos += paddleVel;
	}
}

function collision(){ 
	if((myBall_bottom >= paddleL_top) && (myBall_top <=    paddleL_bottom)){
		if(myBall_left <=  paddleL_right){
    		myBall_xVel = -myBall_xVel;
    		score = score + 1;
    		switchTheColor();
  		}
 	}

	if((myBall_bottom >= paddleR_top) && (myBall_top <= paddleR_bottom)){
		if(myBall_right >=  paddleR_left){
    		myBall_xVel = -myBall_xVel;
    		score = score + 1;
    		switchTheColor();
  		}
 	}
}

function showScore() {
  fill("yellow");
  textSize(20);
  text("Score:",20,20);
  text(score,20,40);
}