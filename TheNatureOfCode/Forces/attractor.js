

class Attractor {
    constructor (x,y) {

        this.location = createVector (x,y)
        this.mass = 20
        this.g = 1
    }

    display () {
        

        ellipse (this.location.x,this.location.y, this.mass*2)
    }

    attract (obj) {
       
        let force = p5.Vector.sub( this.location , obj.location)
        let distance = force.mag()
        distance = constrain(distance,15,30.0);

        force.normalize();

        

        let strength = (this.g*this.mass*obj.mass) / (distance * distance)
        
        force.mult(strength)
        
        return force  
    }
}