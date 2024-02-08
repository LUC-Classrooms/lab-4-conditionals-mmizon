function setup() {
  createCanvas(320, 240);
}

function draw() {
  background(200);
  var x = 100
  // check to condition of the mouse
  if(mouseIsPressed){ // true or false?
    // if true, change the fill color here
    fill(0, 0, 255)
    x = x+100
  }
  else { 
    // otherwise do this:
    fill(0, 100, 100)
  }
  ellipse(width/2, height/2, x, x);
}
