
let balls = new Array (10);
let attractor;

function setup () {
    frameRate(30)
    createCanvas(250,250)
    for ( let i = 0 ; i < balls.length ; i ++) {
        balls[i] = new Ball (random(width), random(height))
    }
    attractor = new Attractor (width/2,height/3)
}

// function draw () {

//     background(0)

//     for (ball of balls) {
//    let gravity =  attractor.attract(ball)
//    console.log(gravity)

   
//    ball.applyForce(gravity)

//    ball.update()
//     ball.display()

//     attractor.display();
//     }
// }

function draw () {
    background (0)

    for (let i = 0; i < balls.length ; i++) {
        for (let j = 0; j < balls.length ; j++) {
            if (i != j) {
            let force = balls[j].attract(balls[i])
            console.log(force)
            balls[i].applyForce (force)
            }
            
        }
        balls[i].update()
        balls[i].display()
    }

}