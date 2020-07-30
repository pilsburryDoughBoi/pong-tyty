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


function setup() {
	createCanvas(canvasWidth, canvasHeight);
  background(color(0,0,100));
  rectMode(CENTER);
  myBall = rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
//console.log(myBall);
}

function draw() {
 background(color(0,0,100));

 moveAndBounce();
 
// this makes the ball appear
rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
}

function moveAndBounce(){
	myBall_xPos  = myBall_xPos + myBall_xVel;
	myBall_left  = myBall_xPos - ballSize/2;
	myBall_right = myBall_xPos + ballSize/2;
 // rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
  if (myBall_xPos > canvasWidth){
    myBall_xVel = -1;
  }else if (myBall_xPos < 0){
  myBall_xVel = 1;
}

	myBall_yPos  = myBall_yPos + myBall_yVel;
	myBall_left  = myBall_yPos - ballSize/2;
	myBall_right = myBall_yPos + ballSize/2;
// this makes the ball go back and forth vertical
  if (myBall_yPos > canvasHeight){
    myBall_yVel = -1;
  }else if (myBall_yPos < 0){
  myBall_yVel = 1;
}
}