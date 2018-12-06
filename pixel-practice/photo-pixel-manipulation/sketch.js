let img;
let outLine = []
let i = 0;


function preload() {
    img = loadImage('./assets/IMG_0623.JPG')
}

function setup() {
    // colorMode(HSB)
    img.resize(600, 600)
    createCanvas(img.width, 600)
  
    // img.filter(GRAY)
    // img.filter(INVERT)
    img.filter(THRESHOLD, .25);
    
    img.loadPixels();
    pixelDensity(1)
    var d = pixelDensity();

    for (var i = 0; i < d; i++) {
        for (var j = 0; j < d; j++) {
            // loop over
            for (let x = 0; x < width; x++) {
                for (let y = 0; y < height; y++) {


                    idx = 4 * ((y * d + j) * width * d + (x * d + i));
                    // img.pixels[idx] = random(0,255);
                    // img.pixels[idx+1] = 0;
                    // pixels[idx+2] = 0;
                    // img.pixels[idx+3] = 5;
                    let r = img.pixels[idx];
                    let g = img.pixels[idx + 1];
                    let b = img.pixels[idx + 2];
                    let a = img.pixels[idx + 3];
                    let r2 = img.pixels[idx + 4];
                    let g2 = img.pixels[idx + 5];
                    let b2 = img.pixels[idx + 6];
                    let a2 = img.pixels[idx + 7];
                    // let pixelColor = color(r,g,b,a);
                    // console.log(pixelColor)
                    let bright = brightness([r, g, b, a]);
                    let bright2 = brightness([r2, g2, b2, a2]);
                    if (bright > bright2 || bright < bright2) {
                        outLine.push(createVector(x, y))
                    }

                    // let hueness = hue([r, g, b, a]);
                    // let hueness2 = hue([r2, g2, b2, a2]);

                    // if (hueness >220 ) {
                    //     outLine.push(createVector(x, y))
                    // }
                    // console.log(bright)

                }
            }
        }
    }

    img.updatePixels();



    background(0)
    background(img)

    // noFill();
    noStroke();
    strokeWeight(.10)



    for (let x = 0; x < outLine.length; x++) {
        fill(255, 100, 200)
        // const test = p5.Vector.random2D().normalize();
        ellipse(outLine[x].x, outLine[x].y, 2)
        // rect ( outLine[x].x, outLine[x].y, 1,10)
    }   



    // saveCanvas('test', 'jpg')



}

function draw() {


}