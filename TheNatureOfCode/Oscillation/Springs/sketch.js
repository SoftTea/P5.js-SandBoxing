
let mover;
let spring;
let i = 0

function setup () {

    createCanvas (500,500)
    let location = createVector( 0, 0)
    let velocity = createVector(0,0)
    let acceleration = createVector(0,0)
    let mass = 20
    let springAnchor = createVector (0,0)
    mover = new Mover (location, velocity, acceleration,mass) 
    spring = new Spring (springAnchor,mover)
}

function draw () {

    background (0);

    let wind = createVector (random(-1, 1),0)
    let gravity = createVector (0,.2)
    push ()
    translate(width/2, height/2)
    rotate (i)

    
    mover.applyForce(wind);
    mover.applyForce(gravity)
    spring.display();
    spring.displayLine(mover)
    spring.connect(mover)
    mover.update ();
    
    mover.display();
    pop ()
    //  i += 0.06


}

class Mover {
    constructor (location, velocity, acceleration,mass) {
        this.location = location
        this.velocity = velocity
        this.acceleration = acceleration
        this.mass = mass;
        
        
    }

    display () {

        

        ellipse (this.location.x, this.location.y, this.mass *2 )
    }

    update () {

        this.velocity.add(this.acceleration)

        this.location.add(this.velocity)

        this.acceleration.mult(0)
    }

    applyForce (force) {

        this.acceleration.add( force.div( this.mass ) );
    }
}

class Spring {
    constructor (anchor, mover) {
        this.anchor = anchor;
        this.length =100,
        this.k = .05
    }

    display () {
        stroke (255)
        rectMode (CENTER);
        rect ( this.anchor.x,this.anchor.y, 10,10) 
    }

    displayLine (mover) {
        stroke(255)
        line(this.anchor.x,this.anchor.y , mover.location.x, mover.location.y)
    }

    connect (mover) {
        let force = p5.Vector.sub(mover.location , this.anchor);
        let d = force.mag()
        let stretch = d - this.length

        force.normalize ();
        force.mult(-1 * this.k * stretch);

        mover.applyForce(force)

    }
    
}

