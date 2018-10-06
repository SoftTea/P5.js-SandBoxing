// let i = 0
let x, y;

let petals = []

function setup () {
createCanvas (500,500)
scale (20)
 x = new Petal(200,200,20,30,20,2,200,200)

//  y = new Petal()

//  for (let i = 0 ; i < 12; i ++) {
     
//      petals.push(new Petal (5*i,2*i,2*i,3*i,i*6,2*i,5*i,2*i)

//      )
//  }


 

}

function draw () {
    background(0)
    noStroke()
    fill ('pink')
    push ()
    scale ()
    x.output()
    // y.output()

    pop ()
    push ()
    for (let i = 0 ; i< petals.length; i++) {
        
        // translate (20+i*40,30*i)
        petals[i].output()
       

    }
    pop()
   
    // bezier (200+i,200+i,map(20*i,0,i,20,30),300+i,200+i,2*i,200+i,200+i)
    // if (i +100 > width &&  i + 100 > height) {
    //     i = -200
    // }
   
    // i++
}

class Petal {
    constructor (x1,y1,x2,y2,x3,y3,x4,y4) {
        this.x1 = x1,
        this.y1 = y1,
        this.x2 = x2,
        this.y2 = y2,
        this.x3 = x3,
        this.y3 = y3,
        this.x4 = x4,
        this.y4 = y4,
        this.i = 0

    }

    output () {
        bezier (this.x1+this.i,this.y1+this.i,map(this.x2*this.i,0,this.i,this.x2,this.x2+10),map(this.y2*this.i,0,this.i,this.y2,this.y2+10),map(this.x3*this.i,0,this.i,this.x3,this.x3+10),this.y3*this.i,this.x4+this.i,this.y4+this.i)

        if ( this.x1 > width &&  this.y1 * 2 > height) {
            this.i = -this.x1*2
        }

        this.i +=1
    }
}