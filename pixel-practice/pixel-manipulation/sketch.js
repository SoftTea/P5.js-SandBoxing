

function setup () {

    createCanvas(500, 500)

    loadPixels();
    
    var d = pixelDensity();
    console.log (d)
    for (var i = 0; i < d; i++) {
    for (var j = 0; j < d; j++) {
    // loop over
    for (let x = 0 ; x < width; x++) {
    for (let y = 0 ; y < height; y++) {
        

    idx = 4 * ((y * d + j) * width * d + (x * d + i));
    pixels[idx] = random(0,255);
    pixels[idx+1] = 0;
    pixels[idx+2] = 250;
    pixels[idx+3] = 255;
    }
}   
  }
}

updatePixels();


}

function draw () {

    // background(0)

}