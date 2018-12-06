

let tests;
function setup () {
    createCanvas (500,500)
    angleMode(DEGREES)

    // test = new Bar ( {x:100, x2: -100} , 30 ,30)
    // test = new Bar ( {x:100, x2: -100} , 30 ,40)
    // test = new Bar ( {x:100, x2: -100} , 30 ,30)

    tests = new Array (100)
    let randomLength = random (20,200)
    for (let i = 0 ; i< tests.length ; i ++) {
        
        // tests[i] = new Bar ( {x:randomLength, x2: -(randomLength)} , 30 ,30+ i*50)
        let randomColor = random (255)
        let randomColorR = random (255)
        tests[i] = new Bar ( {x:randomLength +20, x2: -(randomLength)-40} , 30 ,30+ i*50 , [randomColorR, randomColor,randomColor])
        // tests[i] = new Bar ( {x:randomLength +40, x2: -(randomLength-100)} , 30 ,30+ i*50)
    }
}

function draw () {
    background(100)

    // push ()

    // translate (width/2, height/2)
    // rotate (i)  

    // ellipse (0,0,20)
    // line (0, 100, 0, -100)
    // fill (200)
    // ellipse (0, 100, 20)
    // ellipse (0, -100,20)

      
    // pop ();
 
    
    for (test of tests) {
    test.update();
    test.display()

    }

    
}

class Bar {
    constructor (line,ellipseSize, startRotation, color) {
        this.line = line
        this.ellipseSize = ellipseSize
        this.rotate = startRotation
        this.color = color
    }

    display () {
    
    rotate (this.rotate)   
    // ellipse (0,0,20)
    line (0, this.line.x, 0, this.line.x2)
   
    fill(this.color)
    noStroke()
    ellipse (0, this.line.x, this.ellipseSize)
    ellipse (0,  this.line.x2, this.ellipseSize)


    // if (this.line.x > width && this.line.x2 > width) {
    //     this.line.x = line.x
    //     this.line.x2 = line.x2
    // }
    pop ();

    this.rotate+=.5
    // this.line.x++
    // this.line.x2++

   
    }

    update () {
        push()
        console.log(width, 'width outside translate')
        translate (width/2, height/2)
        console.log(width, 'width inside translate')
    }
}