


let ball;

function setup () {

    createCanvas (500,500)
   

    ball = new Ball ()

    
    

   


}

function draw () {

    background (0)

    ball.display()
    ball.update();
    ball.edge ();
    console.log(ball)
}


class Ball {

    constructor () {
    this.location = createVector (width/2, height/2);
    this.velocity = createVector (0,0)
    this.acceleration = createVector (2,1)
    }

    display () {

        fill (255)
        ellipse (this.location.x, this.location.y, 30)
    }

    update () {
       
      
        this.velocity.add(this.acceleration)
        this.location.add(this.velocity)
        this.acceleration.mult(0)
        
    }

    edge () {

        if( this.location.x > width || this.location.x < 0) {
             this.velocity.x *= -1
            
            
        } else if (this.location.y < 0 || this.location.y > height ) {
           this.velocity.y*=-1
           
        }
           
        
    }

}