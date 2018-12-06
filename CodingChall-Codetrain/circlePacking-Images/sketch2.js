let c;
let circles = []
let spots = [];
let img;

function preload () {
    img = loadImage("./assets/IMG_0656.JPG")
}

function setup () {
    img.resize(0,600)
    createCanvas (img.width, 600)
  
   

   

    img.loadPixels();
    console.log(img)
    for (var x = 0; x < img.width; x++) {
        for (var y = 0; y < img.height; y++) {
          var index = 4* (x + y * img.width);
          var r = img.pixels[index];
          var g = img.pixels[index+1];
          var b = img.pixels[index+2];
          var a = img.pixels[index+3];
          var b = brightness([r,g,b,a]);
        //   if (b > 1) {
            spots.push(createVector(x, y));
        //   }
        }
      }
    
}

function draw () {

 
    background(0);

    let total = 20;
    let count = 0;
    let attempts = 0

    while (count < total) {

        let c = newCircle();
        if (c != null) {
            circles.push(c)
            count++
        }
        attempts++;
        if (attempts > 1000) {
            noLoop();
            console.log('Done');
            break;
        }
    }

    

   

    for (let circle of circles) {
        if (circle.r > 2) {
            circle.growing = false;
        }
        // if (circle.growing) {
        //     if (circle.edges()) {
        //         circle.growing = false;
        //     } else {
        //         for (let otherCircle of circles) {
        //             if (circle != otherCircle) {
        //             let d = dist (circle.x,circle.y,otherCircle.x, otherCircle.y);
        //             if (d -2  < circle.r + otherCircle.r) {
        //                 circle.growing = false;
        //                 break;
        //             }
        //             }
        //         }
        //     }
        // } 
        
        circle.show();
        circle.grow();
    }

}


function newCircle () {

    let r = int( random (0, spots.length-1))
    let spot = spots[r]

    let x = spot.x;
    let y =  spot.y;

    let valid = true;

    for (let circle of circles) {
        let d = dist(x, y, circle.x, circle.y)
        if (d +2 < circle.r) {
            valid = false;
            break
        }
    }
    if (valid) {
        let index = (x + y *width) *4
        var red = img.pixels[index];
        var g = img.pixels[index+1];
        var b = img.pixels[index+2];
        var a = img.pixels[index+3];
       
        return new Circle(x,y, [red,g,b,a])
    } else {
        return null
    }
}


class Circle {
    constructor (x,y,c) {
        this.x = x;
        this.y = y;
        this.r = .1;
        this.c = c;
        this.growing = true;

    }

    show () {

        // strokeWeight(2)
        // stroke(255)
        // noFill()
        noStroke();
        // console.log(c)
        fill(this.c);
        ellipse(this.x, this.y, this.r*2)
    }

    grow () {
        if (this.growing) {
        this.r+=.5 }
    }

    edges () {
        return ( this.x + this.r > width || this.x - this.r < 0 || this.y + this.r > height || this.y - this.r < 0)
    }


}