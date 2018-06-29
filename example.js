// Global Variables
var p5Canvas;
var myName;
var ballX;
var ballY;
var ballRadius;
var ballXVelocity;
var ballGrowth;
var ballYVelocity;
var obstacle;

// initialize global variables in setup() function
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Adrian");
  ballX = width / 2;
  ballY = height / 2;
  ballRadius = 50;
  ballXVelocity = 5;
  ballGrowth = 10;
  ballYVelocity= 5;
}


function draw() {
  background(0, 255, 0);
  //drawSquares(random(30, 60)); // Uncomment this line for some fun!
  drawBall();
    rect(120,130,55,55);
    translate(30,30);
    rect(400,430,55,55);
    rect(340,230,20,50);
    rect(25,290, 55, 55); 
}

function drawBall() {
  if(ballX >= width - ballRadius || ballX <= 0 + ballRadius) {
    ballXVelocity *= -1;
  }
    if (ballY >= height-ballRadius || ballY <=0 + ballRadius) {
        ballYVelocity *= -1;
    } 
  var circumference = getCircumference(); // local variable
  if(circumference >= 600 || circumference <= 160) {
    ballGrowth *= -1;
  }
  ballX = ballX + ballXVelocity;
  ballY = ballY + ballYVelocity;
  //ballRadius += ballGrowth; // Uncomment this line for a "pulsing" effect!
  var ballDiameter = ballRadius * 1; // local variable
  fill("purple");
  ellipse(ballX, ballY, ballDiameter, ballDiameter);
}

function getCircumference() {
  return 2 * PI * ballRadius;
}

function drawSquares(num) {
  // a while loop
  while(num > 0) {
    var randomX = random(width); // generate random float (decimal) between 0 and width - 1
    var randomY = random(height); // generate random float (decimal) between 0 and height - 1
    var randomLength = random(20, 80); // generate random float (decimal) between 20 (inclusive) and 80 (exclusive)
    var randomRed = random(25); // amount of red is between 0 (none) and 255 (most)
    var randomGreen = random(125);
    var randomBlue = random(155);
    fill(randomRed, randomGreen, randomBlue);
    rect(randomX, randomY, randomLength, randomLength);
    num--;
  }
}

// another way of drawing squares, but with a for loop (same exact result)
// can you spot the (very few) differences?
function drawSquaresAlt(num) {
  // a for loop
  for(var i = 0; i < num; i++) {
    var randomX = random(width); // generate random float (decimal) between 0 and width - 1
    var randomY = random(height); // generate random float (decimal) between 0 and height - 1
    var randomLength = random(20, 80); // generate random float (decimal) between 20 (inclusive) and 80 (exclusive)
    var randomRed = random(25); // amount of red is between 0 (none) and 255 (most)
    var randomGreen = random(55);
    var randomBlue = random(155);
    fill(randomRed, randomGreen, randomBlue);
    rect(randomX, randomY, randomLength, randomLength);
  }

}
