
let circles = []
let colors = {
    primary: [0,0,0],
    second: [100,0,0],
    third: [255,100,0],
    background: [255] 
}


function setup () {
    createCanvas (600,500)
    angleMode(DEGREES)
    for (let i= 0; i <45; i++) {
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
    stroke(colors.third);
    strokeWeight(3);
    
    // noStroke();
    push ();
    
    translate(width/2, height/2)
    // ellipse (0, 70 , 60)
    // ellipse (35, 70 , 60)
    // ellipse (-60, 70 , 60)
    
    for (let i = 0 ; i < circles.length; i++) {
        
        // rotate ()
        
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
this.r = r   ,
this.range = [x,y,r]
this.rate = 1 ;
this.color = color


    }
   draw () {
    ellipse (this.x,this.y,this.r )
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
            this.x = this.range[0]
            
            // this.r--
           
         } 
         if ( this.r > this.range[2] * 5) {
             this.rate = -1 
           
            //  if (this.color == colors.primary) {
            //     this.color = colors.second
            // } else if (this.color == colors.second) {
            //     this.color = colors.third
            // }else if (this.color == colors.third) {
            //     this.color = colors.background
            // } else if (this.color == colors.background) {
            //     this.color = colors.primary
            // } 
             
            
         } 
         else if (this.r < this.range[2] * 4  ) {
            this.rate = 1 
            
            // if (this.color == colors.primary) {
            //     this.color = colors.second
            // } else if (this.color == colors.second) {
            //     this.color = colors.third
            // }else if (this.color == colors.third) {
            //     this.color = colors.background
            // } else if (this.color == colors.background) {
            //     this.color = colors.primary
            // } 
          

         }
        else if (this.range[0] - this.r > this.x ) {
            // this.rate = random(1,2)
            this.x = this.x - random(-3,-1)
            // this.r ++
          
        }
        this.x += this.rate 
        
        
        this.r+=this.rate 
        
        // this.x = this.x + this.rate
    }
}



