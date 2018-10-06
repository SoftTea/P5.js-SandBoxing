let i = 1

circles = [
    
]

let randomColor;



function setup () {
    createCanvas(600,600)
    

    for (let p = 0; p <20; p++) {
        circles.push({
        radius: p *45,
        // color: map(p, 0,20,0,255)
        c: [random(0,255),random(0,255),random(0,255)]
        })
    }
    console.log(circles)
    randomColor = [random(0,255), random(0,255), random(0,255)]
   
    
}


function draw () {
    background(0)
    // drawCircle( width/2 , i,7)
    // fill (255,0,0)

    stroke (0)
    noStroke()
for (let p = 0; p < circles.length; p++) {
    
    if (circles[p].radius  > width +250 ) {
        circles[p].radius = 0
    }
    
    circles[p].c.splice(3,1, map(circles[p].radius , 0, width +300, 100,0))
    fill (circles[p].c)
    ellipse (width/2 , height/2 , circles[p].radius+=1)
}
    // ellipse ( width/2, height/2,  circles[0].radius++)
    // // fill(0,255,0)
    // ellipse ( width/2, height/2,  circles[1].radius++)
    // // fill(0,0,255)
    // ellipse ( width/2, height/2,  circles[2].radius++)
    // fill (20,0,255)
    // ellipse ( width/2, height/2, 100 + i)
    // if (circles[19].radius  > width) {
     
    
// ellipse(width/2,height/2, 200)
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