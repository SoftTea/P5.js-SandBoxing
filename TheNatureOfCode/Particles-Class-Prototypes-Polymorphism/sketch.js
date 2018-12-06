
let mouse;

let img;

let systems = [];

let repelers = [];

function setup () {

    createCanvas (500,500);
   
    img = loadImage('./data/texture.png')
   
   
    for (let i = 0; i<= width; i+=100) {
        for (let j = 0; j <= height; j+=100) {
        repelers.push( new Repeler (createVector (i,j) ) )
        }
    }

    //  mouse = new Repeler(createVector(mouseX, mouseY))
     
     

    // particles.fill(new Particle (createVector (width/2, height/2)))
    
    
    // for (let i = 0 ; i < particles.length; i++) {
    //     let location = createVector( 0, 0 )
    //     particles[i] = new Particle (location);
    // }
};

function draw () {

    background (10,10,20)
    
    // push()
    // blendMode(ADD)

    // particleSystem.origin.x = mouseX;
    // particleSystem.origin.y = mouseY;

    // particleSystem.run()

    // let gravity = createVector (0,.5)
    // let wind = createVector (.2,0)
    // for (system of systems) {
    //     system.applyForce(wind)
    //     system.applyForce(gravity)
    // }

    for (let particleSystem of systems) {
        for (let repeler of repelers) {
        particleSystem.applyRepeller(repeler) }
        // particleSystem.applyRepeller(mouse)
        particleSystem.run();
    }

    if (frameCount % 40 == 0) {
        newParticleSystem = new ParticleSystem(createVector(random(width), -15), 0);
       let x =  new ParticleSystem(createVector(random(width), height), 0);
        systems.push(x)
        systems.push(newParticleSystem)
    }

    // mouse.location.x = mouseX;
    // mouse.location.y = mouseY
    // mouse.display()

    // console.log(mouse)
    // for (repeler of repelers) {
        
        
    //     repeler.display()
        
    // }
 
    // pop();

};

function mousePressed () {
    newParticleSystem = new ParticleSystem(createVector(mouseX, mouseY), 20);
    systems.push(newParticleSystem)
}

class Particle {
    constructor (location) {
        this.location = location.copy()
        this.velocity = createVector (random(-.5,.5),random(-.5,.5));
        this.accleration = createVector (0,0);
        this.lifespan = 255;
        this.mass = 1;

    }

    run () {

        this.update();
        this.display ();
       
    }

    update () {
        
        this.velocity.add(this.accleration);
       
        
        this.location.add(this.velocity);

        this.accleration.mult(0)
        this.lifespan -= 3.5;
    }

    display () {
        // stroke (150,this.lifespan);
        // // noStroke ();
        // fill (255,255,100, this.lifespan);
        // ellipse ( this.location.x, this.location.y, 10)
        imageMode (CENTER);
       
        tint (random(255),random(255),255, this.lifespan)
        image (img,this.location.x, this.location.y)
        
    }

    applyForce (force) {
        let f = force
        f.div(this.mass)
      
        this.accleration.add(force)
        
    }

    isDead () {
     return (this.lifespan <= 0) ? true : false
}
}



class Confetti extends Particle {
    constructor(location) {
        super(location);
        this.theta = map(this.location.x, 0, width, 0, TWO_PI*2)
    }

    display () {
      
        stroke (150,this.lifespan);
        // noStroke ();
        fill (255,random(255),100, this.lifespan);
        rectMode(CENTER);
        push ();
        translate(this.location.x, this.location.y)
        rotate (this.theta)
        rect (0, 0, 4,4)
        pop();
        this.theta+=.1
    }
}





class ParticleSystem {

    constructor (origin, num) {
        this.origin = origin;
        this.pArray = [];
        this.lifespan = 255;

       

        for(let i = 0; i< num; i++) {
            let r = random(1)
    

            (r < .5) ? 
            this.pArray.push(new Particle (this.origin)) 
            :
            this.pArray.push(new Confetti (this.origin))

        
        }
    }


    addParticle() {
       
        let r = random(1)

        
        
       return ( r < .5 ) ? this.pArray.push(new Particle (this.origin)) : this.pArray.push(new Confetti (this.origin))  
    
    }

    decayParticle () {

        for (let i = this.pArray.length-1; i >= 0; i--) {
        push ();
        blendMode (ADD)
       
            this.pArray[i].run();
    
            pop();

    // this.pArray = this.pArray.filter(particle => !particle.isDead());
            // if(this.pArray[i].isDead()) {
            //     this.pArray.splice(i,1)
            // }

        (this.pArray[i].isDead()) 
            ? this.pArray.splice(i,1) : null
            
        }
    }

    applyForce (force) {
    
        let arr = this.pArray;
        for(let particle of arr) {
            particle.applyForce(force)
        }
    }

    applyRepeller (r) {
        for (let particle of this.pArray) {
            let force = r.repel(particle);
            particle.applyForce(force)
        }
    }

    run () {
        
        // PArticle life span option
        // if(this.lifespan >0) {
        // this.addParticle ();
        // }

        (this.lifespan > 0) ? this.addParticle () : null;

        // this.addParticle()
        this.decayParticle();

        this.lifespan-= 3;
    }
}

class Repeler {
    constructor (location) {
        this.location = location
        this.r = 21
        this.strength = 50
    }

    display () {

        push()
        
        fill(255)
        ellipse (this.location.x, this.location.y, this.r*2)

        pop()
    }

    repel (particle) {
        // set up as attractor 
        let dir = p5.Vector.sub(particle.location, this.location)

        let d = dir.mag();

        d = constrain (d,5,80);

        dir.normalize()

        let force = -1 * this.strength /(d*d);

        dir.mult(force)
        return dir
    }
}