
let balls = new Array (10)
let liquid;


function setup () {

    createCanvas (250,250)
    background (0)

    liquid = new Liquid ( 0, height/2, width, height/2 , .2)

    for (let i = 0 ; i< balls.length; i ++) {
        balls[i] = new Ball ()
    }
}

function draw () {


    background (0);

     for (ball of balls) {
         let mass = ball.mass
         const gravity = createVector (0,.1*mass)
         const wind = createVector (0.001,0)
 
    if (ball.isInside(liquid)) {
        ball.drag(liquid)
    }
 
     ball.applyForce (gravity)
    //  ball.applyForce (wind)
     ball.update();
     ball.display();
     ball.edge();
     }

        liquid.display();

     if (mouseIsPressed) {
         reset();
     }

     
};


let reset = () => {
    for (let i = 0 ; i < balls.length; i++) {
        balls[i] = new Ball ()
    }
}