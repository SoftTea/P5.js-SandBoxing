
let angle = 0;
let startAngle = 0;
let aVelocity = .4;
let amplitude = 100;
console.log(window.innerWidth)

function setup () {

    
    createCanvas (window.innerWidth,windowHeight)
    
//     background(0)
//    strokeWeight(2)
//     stroke (255)
//     noFill()
//     beginShape();
//     for (let x = 0 ; x <= width; x+=1) {
//         let y = map (sin(angle) , -1,1, height/2-50,height/2 ) 

//         vertex(x,y)
//         angle+= aVelocity;
//     }

//     endShape()
    

}

function draw () {
    background(0)

    startAngle +=.01
   let angle = startAngle;
    strokeWeight(.08)
    for (let x = 0 ; x < width; x +=10) {
        y = 50 * sin( angle ) 

        ellipse(x,y+height/2, 48,48);
        angle += aVelocity
        
    }
    
    
    
    
   
}

function windowResized() {
    resizeCanvas( window.innerWidth, window.innerHeight);
  }