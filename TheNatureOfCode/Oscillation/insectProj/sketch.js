
xoff = 0.0
yoff =0.0
let insects = Array (25);

function setup () {
    createCanvas (400,400)
    
    // angleMode(DEGREES)
    amplitude = createVector( 50,100);
    period = createVector(50,200);
    
    for (let i = 0 ; i < insects.length ; i++) {
        insects[i] = new Insect ()
    }
}

function draw () {
    background(0)
    fill (255)
 
    ellipse (  0,0, 30)

  for (insect of insects) {
    insect.display()
    insect.update();
    insect.edge();

  }

    ellipse (  0,0, 30)

    console.log(insect)
}

class Insect {

    constructor () {

        this.loaction = createVector (random(0,width),random(0,height));
        this.velocity = createVector (.0,0);
        this.acceleration =  p5.Vector.random2D()
        this.mass = 10
        this.width= this.mass * 5
        this.height = this.mass * 2
        this.angle = 0;
        this.test = .00
        


    }

    display () {
        this.angle = atan2( this.velocity.y, this.velocity.x)
        stroke (255)
        push ();
        rectMode(CENTER);
        translate (this.loaction.x,this.loaction.y)
        
        rotate (this.angle)
        
        rect(0,0, this.width,this.height);

        this.createLegs()
        
        pop ();
    }

    update() {
        // this.acceleration = createVector(noise(xoff,yoff)*.001, noise(xoff,yoff) * .001)
        
        // if (frameCount % Math.floor(random(100,200)) === 0) {
        //     this.acceleration =  p5.Vector.random2D()
        // }

        this.velocity.x = constrain(this.velocity.x, -.5, .5)
        this.velocity.y = constrain(this.velocity.y, -.5, .5)

        this.velocity.add(this.acceleration)

        this.loaction.add(this.velocity)

        this.acceleration.mult(0)

        this.test += .01
       
    }

    createLegs () {

        let ossilation = 10*sin(this.test*10)

        for (let i = 0; i < 4; i++) {
           
            let legOss =(ossilation-this.width/2) + this.width/3*i + 0
            let legX =(-this.width/2) + this.width/3*i
            let legYNeg =  -this.mass*2
            let legYPos =  this.mass*2
           
            ellipse ( legOss, legYNeg , this.mass)
            
            line (  legX, 0, legOss, legYNeg)
            
            ellipse (legOss, legYPos, this.mass)
    
            line ( legX, 0,  legOss, legYPos)
            }

        
    }

    edge () {
        if( this.loaction.x + this.width/2 < 0) {
            this.loaction.x = width
        }
        if( this.loaction.y + this.height/2 < 0) {
            this.loaction.y = height
        }

        if( this.loaction.x - this.width/2 > width) {
            this.loaction.x = 0
        }

        if( this.loaction.y - this.height/2 > height) {
            this.loaction.y = 0
        }
    }
}