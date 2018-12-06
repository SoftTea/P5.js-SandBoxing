let amplitude;
let period;
let angle = 0.0;
let aVelocity = 0.01;

function setup () {
    createCanvas (400,400)
    
    amplitude = createVector( 50,100);
    period = createVector(50,200);
}

function draw () {
    background(0)
    fill (255)
    // Aplitude = the range of values to osillate between 
    // period = the length of 'time' for the osilation to start again 
    // sin () TWO_PI is the period 
    let x = amplitude.x * sin(TWO_PI * (frameCount/period.x))
    let y = amplitude.y * sin(TWO_PI * (frameCount/period.y))

    // can use angle to set inside sin()

    translate (width/2, height/2)
    ellipse (  x,y, 30)

    angle += aVelocity;
}