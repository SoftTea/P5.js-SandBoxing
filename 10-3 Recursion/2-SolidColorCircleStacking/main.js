let i = 1

circles = [
    
]

let randomColor;



function setup () {
    createCanvas(600,600)
    

    for (let p = 0; p < width/5; p++) {
        circles.push({

        radius: p *10,
        
        c: [255,random(50,100),random(0,150)]
        })
    }
    console.log(circles)
    // randomColor = [random(0,255), random(0,255), random(0,255)]
   
    
}


function draw () {
    background(0)
    // drawCircle( width/2 , i,7)
    // fill (255,0,0)

    stroke (0)
    noStroke()
for (let p = circles.length-1; p > 0; p--) {
    push()
    
    translate(p5.Vector.fromAngle(millis() / 1000, 20));
    if (circles[p].radius  > width *2  ) {
        circles[p].radius = 0
       let spliceElement = circles.splice(p,1);
    //    console.log(spliceElement)
       circles.unshift(...spliceElement)
        // circles.push(circles[p])
        // console.log(circles.shift())
    }
    
    // circles[p].c.splice(3,1, map(circles[p].radius , 0, width +300, 100,0))
   
    fill (circles[p].c)
    ellipse (width/2 , height/2 , circles[p].radius+=1)
   
    pop ()
    fill(0)

   
    
}

}

// function drawCircle(x, radius, level) {                    
//     var tt = 126 * level/5.0;
//     fill(200);
    
//     ellipse(x, height/2, radius*2, radius*2);      
//     if(level > 1) {
//       level = level - 1;
//       drawCircle(x - radius/2, radius/2, level);
//       drawCircle(x + radius/2, radius/2, level);
//     }
// }