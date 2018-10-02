
let circles = []
let colors = {
    primary: [255,212,229],
    second: [212,255,234],
    third: [238,203,255],
    background: [254,255,163 ] 
}


function setup () {
    createCanvas (600,500)
    for (let i= 0; i <40; i++) {
        circles.push ( new Circle (-i*20,0,45,colors.primary ) )

         circles.push (new Circle (i*20, 0, 45, colors.primary) )


         circles.push (new Circle (i*20, 90, 45,colors.second)) 
         circles.push (new Circle (i*20, -90, 45,colors.second) )

         circles.push (new Circle (-i*20, 90, 45,colors.second)) 
         circles.push (new Circle (-i*20, -90, 45,colors.second) )

         circles.push (new Circle (-i*20, 180, 45,colors.third)) 
         circles.push (new Circle (-i*20, -180, 45,colors.third) )

         circles.push (new Circle (i*20, 180, 45,colors.third)) 
         circles.push (new Circle (i*20, -180, 45,colors.third) )
     }
   
}

function draw () {
    background (colors.background)
    // let circle = new Circle (0, 40, 20)
    // circle.draw
    noFill()
    stroke(colors.background);
    strokeWeight(15);
    // noStroke();
    push ();
    translate(width/2, height/2)
    // ellipse (0, 70 , 60)
    // ellipse (35, 70 , 60)
    // ellipse (-60, 70 , 60)
    for (let i = 0 ; i < circles.length; i++) {
        fill (circles[i].color  )
        // fill (random(1,25) )
        circles[i].draw()
        circles[i].move();
       
    }

    pop ();
    
}

class Circle {
    constructor (x,y,r,color) {
this.x =x ,
this.y = y,
this.r = r  ,
this.range = [x,y,r]
this.rate = 5;
this.color = color


    }
   draw () {
    ellipse (this.x,this.y,this.r)
   }


   move () {
    
    //    if (this.x > 0 ) {
    //        this.rate = -1
           
    //    } else if  (this.x < 0 ) {
    //        this.rate = 1
         
    //     }
        
    //     else if (this.x == 0 ) {
    //         this.rate = 0
    //     } 

        if ( this.range[0] < this.x ) {
            this.x = this.x - random(2,15)
            this.r = this.r
            // this.r--
           
         } 
         if ( this.r > this.range[2] * 14) {
             this.rate = -10
             
            
         } else if (this.r < this.range[2]   ) {
            this.rate = 5
          

         }
        // else if (this.range[0] - this.r > this.x ) {
        //     // this.rate = random(1,2)
        //     this.x = this.x - random(-3,-1)
        //     // this.r ++
          
        // }
        this.x ++
        
        this.r+=this.rate 
        
        // this.x = this.x + this.rate
    }
}


// if (this.color == colors.primary) {
//     this.color = colors.second
// } else if (this.color == colors.second) {
//     this.color = colors.third
// }else if (this.color == colors.third) {
//     this.color = colors.background
// } else if (this.color == colors.background) {
//     this.color = colors.primary
// } 
