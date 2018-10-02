function setup () {
    createCanvas (400,400, WEBGL)
    

   
}

let rotation = 1

function draw () {
    background (0)
    stroke (255);
    noFill ();
    rotateZ (rotation/6)
    beginShape();

    // a == Angle 
    // 200 == radius

    for (let a = 0; a < 1000; a +=10) {
         x = 200 * sin (a) ;
         y = 200 * cos (a) ;
        vertex(x,y)
    }
        
    endShape ();
    
    rotation ++    
    
}