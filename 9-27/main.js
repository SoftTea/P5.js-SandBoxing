
// let x,y; 

function setup(){
  createCanvas(710, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  ellipseMode(CENTER);
}

var xoff = 0.0;
var xoff2 = 0.0;
var spin = 1
var spinDirection = true
var rotationRate = 3
var yoff = 0.0;  

function draw() {
  background(168,230,207);
  noStroke();
  xoff = xoff + 0.005;
  var n = noise(xoff) * width;
  fill (220,237,193)
  triangle(n, n, width, -height, width,height)
//   fill('blue')
  triangle(n, 0, width, height, -width, height)
  
  fill (255,211,182)
  push ();
  translate(width/2, height/2) 
  rotate (spin);
  rect(0, 0, 200*n/200, 55*n/200);
  rect(0,0, width/4, 30)
  fill(255,139,148)
  ellipse( 120, 0, 200*(n/width),200*(n/width) )
  ellipse( -120, 0 , 200*(n/width),200*(n/width) )

  pop ();
  console.log(n)
  fill (255,170,165);
  beginShape(); 
  
     // Option #1: 2D Noise
  // var xoff = yoff; // Option #2: 1D Noise
  
  // Iterate over horizontal pixels
  for (var x = 0; x <= width; x += 10) {
    // Calculate a y value according to noise, map to 
    
    // Option #1: 2D Noise
    var y = map(noise(xoff2, yoff), 0, 1, height,350);

    // Option #2: 1D Noise
    // var y = map(noise(xoff), 0, 1, 200,300);
    
    // Set the vertex
    vertex(x, y); 
    // Increment x dimension for noise
    xoff2 += .25;
  }
  // increment y dimension for noise
  yoff += .05;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
if (spin > 360) {
  rotationRate = -3
} if (spin < -360) {
  rotationRate = 3
}

spin += rotationRate
  console.log(spin, 'SPIN')
}
// function draw(){

  
//     // line(5,50,650,25*(i))
//     // i -=10
 
//     // if (i < 0) {
//     //     i = width * random();
//     // }
//     background('pink');
    
//     for (let i = 0 ; i < 50 ; i+= 20) {
//         background('pink')
//         ellipse(x,20,30,25)
//         fill ('blue')
//         ellipse(x,50,30,25)
//         fill('red')
//         ellipse(x,50+30,30,25)
//         ellipse(x,120,30,25)
//         ellipse(x,150,30,25)

//         x = x + 1
//     }
  
   
//     if (x > width ) {
//         x = 0;
//     }
    
   
//     console.log('x', x, 'y', y);
   
// }


// var a;

// function setup() {
//   createCanvas(720, 400);
  
//   a = height / 2;
// }

// function draw() {
//   background(51);
//   line(0, a, a, a);
//   a = a - 0.5;
//   if (a < 0) {
//     a = height;
//   }
// }


