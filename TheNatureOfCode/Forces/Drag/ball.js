


class Ball {
    constructor (x = width/2,y = height/2) {
    this.location = createVector ( x, y)
    this.velocity = createVector (0,0)
    this.acceleration = createVector (0,0)
    this.mass = random(1,30),
    this.g = .2
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

    isInside (l) {

        if ( this.location.x > l.x && this.location.x < l.x + l.w && this.location.y > l.y && this.location.y < l.y + l.h) {
            return true;
        } else {
            return false;
        }
    }

    drag (l) {
        let speed = this.velocity.mag();
        let dragMagnitude = l.c * speed * speed;
        
        let drag = this.velocity.copy();
        drag.mult(-1);
        drag.normalize();

        drag.mult(dragMagnitude)

        this.applyForce(drag)
    }

    attract (obj) {
       
        let force = p5.Vector.sub( this.location , obj.location)
        let distance = force.mag()
        distance = constrain(distance,15,30.0);

        force.normalize();

        

        let strength = (this.g*this.mass*obj.mass) / (distance * distance)

        force.mult(strength)
        // console.log(strength, 'str')        
        return force  
    }

}