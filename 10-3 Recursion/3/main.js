let i = 1
let rate = 0

circles = [

]

let randomColor;



function setup() {
    createCanvas(600, 600)


    // for (let p = 0; p < width / 5; p++) {
    //     circles.push({

    //         radius: p * 10,

    //         c: [255, random(50, 100), random(0, 150)]
    //     })
    // }
    randomColor = []

    for (let p = 0; p < 10; p++) {
        randomColor.push(
            [
                random(255),
                random(255),
                random (255)
            ]
        )
    }
    console.log(randomColor)



}


function draw() {
    background(0)
     rate +=  (i)* 20
     
     stroke (255)
     noFill()
    drawCircle( width , rate +width*2  ,11)
    if (rate > width *20) {
    //    i = -1
    rate = 1
    } else if (rate < 1200) {
    i = 1}
    // fill (255,0,0)
    // if (  i * 20 > width) {
    //     drawCircle (width/2 ,2 * i, 4)
    //     i = 0 
    // }
    // stroke(0)
    // noStroke()
    // for (let p = circles.length - 1; p > 0; p--) {
    //     push()

       
    //     if (circles[p].radius > width * 2) {
    //         circles[p].radius = 0
    //         let spliceElement = circles.splice(p, 1);
    //         //    console.log(spliceElement)
    //         circles.unshift(...spliceElement)
    //         // circles.push(circles[p])
    //         // console.log(circles.shift())
    //     }

    //     // circles[p].c.splice(3,1, map(circles[p].radius , 0, width +300, 100,0))

    //     fill(circles[p].c)
    //     ellipse(width / 2, height / 2, circles[p].radius += 1)

    //     pop()
    //     fill(0)



    // }
    // if (rate >= width) {
    //     i = -1
    //    ellipse( width/2 ,height/2 , 250)
    // }
    

}

function drawCircle(x, radius, level) {                    
    var tt = 126 * level/5.0;
    
    // fill (randomColor[9] )
   
    // translate (200,200)
    

   
    ellipse(x, height/2, radius*2, radius*2); 
    
    if(level > 1) {
      level = level - 1;
      if (radius/2 > 200) {
       
      }
      
    // translate (200,200)
   
    //   fill (randomColor[1])
 
      drawCircle(x - radius/2, radius/2, level);
      push()
    // translate (200,200)
    
    //   fill (randomColor[2])
      drawCircle(x + radius/2, radius/2, level);
     
      
    }
}