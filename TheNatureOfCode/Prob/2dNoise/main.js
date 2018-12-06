
let xoff = 0.0
// let yoff = 0.0

function setup () {

    createCanvas( 500,500)
    background(0)
    
    var d = pixelDensity(1);
    loadPixels();
    
    

    
// for (var i = 0; i < d; i++) {
//   for (var j = 0; j < d; j++) {
    // loop over
      for ( let x = 0 ; x< width; x++) {
          yoff = 0.5;

          for (let y = 0; y <height ; y ++ ) {

            let bright = map(noise (xoff,yoff) , 0 ,1 , 0, 255)
            // idx = 4 * (( y * d + j) * width * d + ( x *d + i));
            idx =  (x + y * width ) * 4 
            pixels[idx] = bright;
            pixels[idx+1] = bright;
            pixels[idx+2] = bright;
            pixels[idx+3] = bright;

            yoff += 0.000000000000000000001;
            } 
            xoff += 0.0000000000000000000001
        }
//   }
// }
    updatePixels();

}

function draw () {

    loadPixels();
    
    

    
    // for (var i = 0; i < d; i++) {
    //   for (var j = 0; j < d; j++) {
        // loop over
          for ( let x = 0 ; x< width; x++) {
              yoff = 0.0;
    
              for (let y = 0; y <height ; y ++ ) {
    
                let bright = map(noise (xoff, yoff) , 0 ,1 , 0, 255)
                // idx = 4 * (( y * d + j) * width * d + ( x *d + i));
                idx =  (x + y * width ) * 4 
                pixels[idx] = random(255) ;
                pixels[idx+1] = random(255) ;
                pixels[idx+2] = random(200,255);
                pixels[idx+3] = random(200,255) ;
    
                yoff += .2;
                } 
                xoff += 0.2
            }
    //   }
    // }
        updatePixels();

}