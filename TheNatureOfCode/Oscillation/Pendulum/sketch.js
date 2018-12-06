
let test;

function setup () {

    createCanvas ( 500,500)

    let origin = createVector (width/2, 100)
    let bob = createVector (width/2,300)
    test = new Pendulum (origin, bob)
    
}

function draw () {

        background(0);

        
        
        test.update();
        
        test.display();
        test.drag();
        
        
}

function mousePressed () {
    test.clicked(mouseX, mouseY)
}

function mouseReleased () {
    test.stoppDragging ()
}

class Pendulum {
    constructor (originVector,bobVector) {
    this.origin = originVector,
    this.bob = bobVector,
    this.ropeLength = bobVector.y - originVector.y
    this.angle = 5;
    this.aVelocity = .00;
    this.aAcceleration = 0
    this.g = .01
    this.mass= 1
    this.dragging = false

    }

    display () {
        
        let x = this.origin.x + this.ropeLength * sin (this.angle)
        let y = this.origin.y + this.ropeLength * cos ( this.angle)

        
        this.bob = createVector (x,y)

        stroke (255)

        line(this.origin.x,this.origin.y, this.bob.x, this.bob.y)

        push ()
        rectMode (CENTER)
        translate (this.bob.x,this.bob.y)
        rotate (this.angle *4 + PI/4)
        rect ( 0,0, 25 ,25)
        pop ()
    }

    update () {
       
        if (!this.dragging) {
        this.aAcceleration = (-1 * this.g * sin(this.angle) ) * this.mass;
        this.aVelocity+= this.aAcceleration;
        this.angle  += this.aVelocity

        this.aVelocity *= .99
        }
        
    }

    clicked (mx,my) {

        let d = dist(mx,my, this.bob.x, this.bob.y);
        let r = (25/2) * 1.414
        if (d < r) {
           this.dragging = true;
        }

    }

    stoppDragging () {
        if (this.dragging) {
            this.aVelocity = 0;
            this.dragging = false;
        }
    }

    drag () {
        if (this.dragging) {
            let diff = p5.Vector.sub(this.origin, createVector (mouseX, mouseY))
            this.angle = atan2(-diff.y, diff.x) - PI/2
        }
    }

    
}

