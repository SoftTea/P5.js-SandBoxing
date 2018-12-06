
let font;
let vehicles = [];

function preload () {
    font = loadFont('Pacifico-Regular.ttf')
}


function setup () {
    createCanvas (600,300)
    background(0)


    let pts = font.textToPoints('Testy test', 30, 200, 128,
    {
        sampleFactor: .2,
        simplifyThreshold: 0
    })
   

    for (pt of pts) {
        let vehicle = new Vehicle(pt.x,pt.y)
        vehicles.push(vehicle)

    }
  
}

function draw () {

    background (0)

  
    
    for (vehicle of vehicles) {
        vehicle.update();
        vehicle.show();
        vehicle.behaviors()
        
    }
   
}



function Vehicle (x,y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x,y)  
    this.vel = p5.Vector.random2D()
    this.acc = createVector() ;
    this.maxSpeed = 15;
    this.maxForce = 1
                           
}

Vehicle.prototype.behaviors = function () {
    let arrive = this.arrive( this.target);
    

    let mouse = createVector(mouseX, mouseY);
    let flee = this.flee(mouse)

    arrive.mult(1);
    flee.mult(5);
    this.applyForce(flee)
    this.applyForce(arrive);
}

Vehicle.prototype.applyForce = function (f) {
    this.acc.add(f)
}

Vehicle.prototype.flee = function (target) {
    let desired = p5.Vector.sub (target, this.pos);
    let d = desired.mag()
    if (d<80) {
    desired.setMag(this.maxSpeed);
    desired.mult(-1)
    let steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxForce)
    
    return steering } else {
        return createVector(0,0)
    }
}

Vehicle.prototype.arrive = function (target) {
    // let targetCopy = target.copy()
    let desired = p5.Vector.sub(target, this.pos);
    let d = desired.mag();
    let speed = this.maxSpeed;
    if (d < 100) {
         speed = map (d,0,100,0, this.maxSpeed)
    }
    desired.setMag(speed);
    let steering = p5.Vector.sub(desired, this.vel);
    steering.limit(this.maxForce)
    return steering
}

Vehicle.prototype.update = function () {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0)
}


Vehicle.prototype.show = function () {
    stroke(255);
    strokeWeight(3);
    rectMode(CENTER)
    rect(this.pos.x, this.pos.y, .5,.5)
}
