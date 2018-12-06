
let car;

function setup () {

    createCanvas (500,500)

    let location = createVector (width/2, height/2)
    car = new Car (location)

}

function draw () {  

    background(0)

    car.display()
    car.keyPresses();
    car.update()

    console.log(car)


}

class Car {
    constructor (location) {
        this.location = location,
        this.velocity = createVector(0,0)
        this.acceleration = createVector(0,0)
        this.angle = atan2 (this.velocity.y, this.velocity.x) // or velocity.heading()
    }

    display () {

        

        fill (255)
        rectMode(CENTER)
        push ();

        // this.angle = atan2 (this.velocity.y, this.velocity.x)
        translate(this.location.x,this.location.y)
        rotate (this.angle)
        rect(0, 0, 40,20)

        pop ()
        
    }

    update () {
        
        
        this.acceleration.y = this.acceleration.y * sin (this.angle)
        this.acceleration.x = this.acceleration.x * cos (this.angle)
        
        

        this.velocity.add(this.acceleration)
         let mag = this.velocity.mag()
        this.velocity.y = mag *sin (this.angle)
        this.velocity.x = mag * cos (this.angle)
        // this.velocity.x = constrain(this.velocity.x,0,1)
        // this.velocity.y = constrain(this.velocity.y,0,1)
        this.location.add(this.velocity)

        this.acceleration.mult(0)
    }

    keyPresses () {

        let acceleration = .05;

        if (keyIsDown(LEFT_ARROW)) {
           this.angle+=.05
        
        
           
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.angle-=.05
            
        }

        if (keyIsDown(UP_ARROW)) {
            let y = .01 
            let x = .01 
            this.acceleration.add(createVector(x,y))
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.acceleration.add(createVector(-acceleration,-acceleration))
        }
    }
}