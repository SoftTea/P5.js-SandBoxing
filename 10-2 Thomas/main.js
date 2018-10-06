// var xoff = 0.0;
// var yoff = 0.0;

function preload () {
    myFont = loadFont('OhTheHorror.ttf')
    myFont2 = loadFont('PermanentMarker-Regular.ttf')
}

function setup () {
    createCanvas(400,500)
    rectMode(CENTER)
    // background(200)
    
}


function draw () {
    push ();
    background(220)
    noFill()
    
    
    stroke (50)
    
    for(let i = 0 ; i <10000; i ++) {
        strokeWeight(2 * random (1.2,0))
    
        point (width * random(1,0),height * random (1,0) )
       
    }
   
    stroke(100)
    strokeWeight(30)
    rect (width/2,height/2,width,height)

     pop ();

     textSize(25);
     textLeading(30)
     textStyle(BOLD)
     textAlign (CENTER,CENTER)
     textFont (myFont2)
     text('HORNY HEARTS \nSNAKES AND FAKES \n THESE ARE GODS\n GOING DOWN', width/2, height/3.9, 300,200);
    
}