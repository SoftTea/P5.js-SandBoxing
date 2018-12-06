let balls = new Array (25);

function setup () {
    createCanvas (500,500)

    for ( let i = 0 ; i < balls.length ; i ++) {
        balls[i] = new Ball()
    } 
}


function draw () {
    background (0);

    
   let sand = rect ( width/1.2,height/1.4,200,50)
    
    const mouse = createVector(mouseX,mouseY)
    const wall = createVector(0,2)
    for (ball of balls) {
        let mass = ball.mass
        const gravity = createVector (0,.1*mass)
        const wind = createVector (0.001,0)


        // friction 
    let c = .5 // coeffiecient of friction 
    let normal = 1 // normal force
    let frictionMag = c*normal;

    let friction = p5.Vector.mult(ball.velocity,-1)
    friction.normalize(); 
    friction.mult(frictionMag);

    
    // if (ball.location.x > width/1.2 && ball.location.y > height/1.4 && ball.location.x < width/1.2 + 200 && ball.location.y < height/1.4 + 50) {
    //     console.log('test')
    //     ball.applyForce(friction)
    // }
    // ball.applyForce(friction)
        
    // // if (mouseIsPressed) {
    // //     let direction = p5.Vector.sub(mouse,ball.location)
    // //     // direction.normalize();
    // //     // direction.mult(20)
    // //     ball.applyForce(direction)
    // //     // ball.applyForce (wind)
    // //     // ball.applyForce(mouse)
    // // }
    
   
    ball.applyForce (gravity)
    ball.applyForce (wind)
    ball.update();
    
    
    ball.display();
    ball.edge();
    }
    

}

class Ball {
    constructor () {
    this.location = createVector ( random(0,width), height/2)
    this.velocity = createVector (0,0)
    this.acceleration = createVector (0,0)
    this.mass = random(2,50)
    }

    display () {
        fill (255,100)
        ellipse( this.location.x, this.location.y , this.mass) 
    }

    update () {
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);
        
        this.acceleration.mult(0)
        
    }

    applyForce (force) {
        let f = p5.Vector.div(force, this.mass)
        this.acceleration.add(f)

    }

    edge () {
        if( this.location.x > width  ) {
            this.velocity.x *= -1
            this.location.x = width
        } else  if( this.location.x < 0  ) {
            this.velocity.x *= -1
            this.location.x = 0
        } else if (this.location.y > height ) {
            this.velocity.y *= -1
            this.location.y = height
            // let wall = createVector (0,-20)
            // this.applyForce(wall)
        }else if (this.location.y < 0 ) {
            this.velocity.y *= -1
            this.location.y = 0
        }
    }

}