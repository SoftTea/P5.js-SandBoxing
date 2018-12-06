let cols, rows
let scl = 30;
let w = 1600;
let h = 1000;
let terrain = []
let flying = 0;




function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL)
    

    
    cols = w / scl;
    rows = h / scl;

    for ( let x = 0; x < cols ; x ++) {


        terrain.push([]) 

        for (let y = 0; y < rows ; y++) {

            terrain[x].push(0)

            

        }
        

    }

   
}

function draw() {
    background(0)

   
    flying -= 0.1;

    // if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
    //     flying -= 0.1

    // }
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
      var xoff = 0;
      for (var x = 0; x < cols; x++) {
        terrain[x][y] = map(noise(xoff, yoff), 0, 1, -200, 150);
        xoff += 0.1;
      }
      yoff += 0.2;
    }



    



    strokeWeight(.4)
    stroke(140)
    fill(100,200)

    let mX = map( mouseX, 0, width, -300,-350)
    let mY = map( mouseY, 0, height, -00,-60)
    translate(mX,mY)
    rotateX(PI/3)
    translate(-width/2 , -height)
    
    for (let y = 0; y < rows -1  ; y++) {
        
        beginShape(TRIANGLE_STRIP);
        
        for (let x = 0; x < cols; x++) {

            vertex(x *scl, y * scl , terrain[x][y])
            vertex(x *scl, (y+1) * scl , terrain[x][y+1])

          
            
        }

        endShape()
    }

    
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
