let img;
let scale = 6;
let scaleW;
let scaleH;
let smaller;

function preload() {
    img = loadImage('./assets/IMG_0543.JPG')
}

function setup() {
    img.resize(0, 500)
    createCanvas(img.width, 500)

    scaleW = int( img.width / scale );
    scaleH = int ( img.height / scale );

    smaller = createImage(scaleW, scaleH)

    smaller.copy(img, 0,0, img.width, img.height,0,0,scaleW, scaleH)

    smaller.loadPixels()
    
    
    for (let y = 0; y < scaleH; y+=1) {
        // beginShape(LINES)
        
        for (let x = 0; x < scaleW; x+=1) {
            let index = (x + y *scaleW) *4
            let r = smaller.pixels[index] 
            let g = smaller.pixels[index+1] 
            let b = smaller.pixels[index+2] 
            let a = smaller.pixels[index+3]
            
            stroke(r,g,b,a)
            strokeWeight(7)
            fill(r,g,b,a)
            // rect(x* scale,y * scale,scale, scale)
            // vertex(x*scale, y*scale)
            // vertex ((x+1)*scale, (y)*scale)

            ellipse(x* scale, y * scale, .1,10)
        }
        // endShape()
    } 
   
    smaller.updatePixels()
    

    // saveCanvas( 'test', 'jpg')
   

}

function draw() {

    // image(smaller,0,0)

    

    noLoop()

}