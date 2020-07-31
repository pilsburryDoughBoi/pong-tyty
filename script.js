var canvasWidth = 500, canvasHeight = 400;
var myBall;
var ballSize = 10;
console.log(ballSize)
var myBall_xPos = canvasWidth/2, myBall_yPos = canvasHeight/2;
var myBall_xVel = 1, myBall_yVel = 1;
var myBall_top = myBall_yPos - ballSize/2,
    myBall_bottom = myBall_yPos + ballSize/2, 
    myBall_left = myBall_xPos - ballSize/2,
    myBall_right = myBall_xPos + ballSize/2;
var paddleWidth = 9, paddleHeight = 46, paddelVel = 5, paddleL_yPos = canvasHeight/2, paddleR_yPos = canvasHeight/2, paddleL_xPos = ballSize, paddleR_xPos = canvasWidth-ballSize, paddle_top = paddleL_yPos - paddleHeight/2, paddle_bottom = paddleL_yPos + paddleHeight/2, paddle_top = paddleR_yPos - paddleHeight/2, paddle_bottom = paddleR_yPos + paddleHeight/2;    

var r = 0, g = 0, b = 0;


function setup() {
	createCanvas(canvasWidth, canvasHeight);
  background(color(0,0,100));
  rectMode(CENTER);
  myBall = rect(myBall_xPos, myBall_yPos, ballSize, ballSize);
 //console.log(myBall);
 myBall_xVel = random(-4,4);
 myBall_yPos = random(-4,4);

 rect(50, canvasHeight/2, paddleWidth, paddleHeight);
}

function draw() {
 background(color(r, g, b));
 rect(paddleL_xPos, paddleL_yPos, paddleWidth, paddleHeight);
 rect(paddleR_xPos, paddleR_yPos, paddleWidth, paddleHeight);
 moveAndBounce();
 paddleControl();
 score();
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

function paddleControl(){
  paddleL_top = paddleL_yPos - paddleHeight/2; paddleL_bottom = paddleL_yPos + paddleHeight/2; paddleR_top = paddleR_yPos - paddleHeight/2; paddleR_bottom = paddleR_yPos + paddleHeight/2;    
   // Update Values
  // If the p is pressed, 
  // move the paddle up on the screen
if (key === "p" ) && (paddleL_top > 0) {
 paddleR_yPos = paddleR_yPos - 5;
 }
  // Update Values
  // If l is pressed, 
  // move the paddle down on the screen
if (key === "l") && (paddleL_bottom < canvasHeight) {
  paddleR_yPos = paddleR_yPos + 5;
 }
  // Update Values
  // If w is pressed, 
  // move the paddle up on the screen
if (key === "w") && (paddleR_top > 0) {
   paddleL_yPos = paddleL_yPos - 5;
 }
  // Update Values
  // If s is pressed, 
  // move the paddle down on the screen
if (key === "s") && (paddleR_bottom < canvasHeight){
  paddleL_yPos = paddleL_yPos + 5;
 }
}

function collision(){
if (myBall_yPos === paddleR_yPos || myBall_yPos === paddleL_yPos){
  myBall_yVel = -myBall_yVel;
 }
}
function score(){
  text("score");
  fill(65);
}

