
let k = 4
let x = 1

function setup () {
    createCanvas(500, 500)
    // blendMode(BLEND     )
    
}

function draw () {
    background(0,100)
    translate(width/2, height/2)
    
    // ellipse(0, 0, 20)

    noStroke();
    
    let r = 100;

    
    // for (let a = 0; a< TWO_PI; a+=.1) {
    //     r = 200
    //     let x= (cos(k*a) * cos(a)) * r
    //     let y = (cos(k*a) * sin(a) ) * r
    //     fill(1*a,10*a,35*a,255*a)
    //     ellipse(x,y,5*a)
    //     // rect(x,y, 5*a,5*a) }
         
    // }
    noFill()
    // stroke(255)
    // beginShape()
    // for (let a = 0; a< TWO_PI; a+=.01) {
    //     r = 200
    //     let x= (cos(k*a) * cos(a)) * r
    //     let y = (cos(k*a) * sin(a) ) * r
       
    //     // rect(x,y, 5*a,5*a) }
    //      vertex(x, y)
    // }
    // endShape()

    // for (let a = 0; a< TWO_PI; a+=.01) {
    //     r =200
    //     let x= (cos(k*a) * cos(a)) * r
    //     let y = (cos(k*a) * sin(a) ) * r
    //     fill(200*a,10,35*a*a,255/a)

    //     push()
    //     translate(x,y)
    //     rotate(a*150)
    //     // ellipse(0,0,3)
    //     rect(0,0, 10*a,1)

    //     // triangle(0, 10, 100, 10, 40, 20)
        
    //     pop()
    // }

     for (let a = 0; a< TWO_PI; a+=0.006) {
        
        let x=  200 *sin(4*a + HALF_PI)
        let y = height/2 *sin(k*a)
        fill(200,10,35,10*a)
        // stroke(200,25*a)
        // fill(255,100*a)

        push()
        // translate(x,y)
        // rotate(a)
        // ellipse(x+2,y+2,20)
        ellipse(x,y, 10,10)
        fill(10,200,35,10*a)
        ellipse(x+2,y+2, 10,10)
        fill(10,200,55,10*a)
        ellipse(x+4,y+4, 10,10)
        fill(100,0,200,10*a)
        ellipse(x+6,y+6, 10,10)

        // triangle(x-20, y-20, x+20, y+20, x+10, y-10)
        
        pop()
    }


    
 
    
 k +=.01
    // if(k / 5 > 1) {
    //     console.log(true)
    //     k=4
    // }

    // console.log(5%2)
   
}