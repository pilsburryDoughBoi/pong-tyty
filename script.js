var canvasWidth = 500, canvasHeight = 400;
var myBall;
var ballSize = 20;
console.log(ballSize)
var myBall_xPos = canvasWidth/2, myBall_yPos = canvasHeight/2;
var myBall_xVel = 1, myBall_yVel = 1;
var myBall_top = myBall_yPos - ballSize/2,
    myBall_bottom = myBall_yPos + ballSize/2, 
    myBall_left = myBall_xPos - ballSize/2,
    myBall_right = myBall_xPos + ballSize/2;

var paddleSizeWidth = 9, paddleSizHeight = 16    
var r = 0, g = 0, b = 0;


function setup() {
	createCanvas(canvasWidth, canvasHeight);
  background(color(0,0,100));
  rectMode(CENTER);
  myBall = rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
 //console.log(myBall);
 myBall_xVel = random(-4,4);
 myBall_yPos = random(-4,4);

 rect(50,50,paddleSizeWidth,paddleSizHeight);
}

function draw() {
 background(color(r, g, b));
 rect(50,50,100,100);
 moveAndBounce();
 // this makes the ball appear
 rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
}

function moveAndBounce(){
	myBall_xPos  = myBall_xPos + myBall_xVel;
	myBall_left  = myBall_xPos - ballSize/2;
	myBall_right = myBall_xPos + ballSize/2;
  if ((myBall_xPos > canvasWidth) || (myBall_xPos < 0)){
    myBall_xVel = -myBall_xVel;
    switchTheColor();
  }

	myBall_yPos  = myBall_yPos + myBall_yVel;
	myBall_left  = myBall_yPos - ballSize/2;
	myBall_right = myBall_yPos + ballSize/2;
 // this makes the ball go back and forth vertical
  if ((myBall_yPos > canvasHeight) || (myBall_yPos < 0)){
    myBall_yVel = -myBall_yVel;
    switchTheColor();
  }
}

function switchTheColor(){
 r = random(255);
 g = random(255);
 b = random(255);
}





