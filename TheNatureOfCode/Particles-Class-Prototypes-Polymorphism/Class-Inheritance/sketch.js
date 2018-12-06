

class Animal {
    constructor (age) {
        this.age = age;
    }

    eat () {
        console.log('Yum!')
    }

    sleep () {
        console.log('zzz')
    }
}

class Dog extends Animal {
    constructor (age,color) {
        super(age)
        this.color = color
        
    }

    eat () {
    
        super.eat();
        console.log('chomp chomp')
    }

    bark () {
        console.log('bark') 
    }
}

let animal = new Animal ();
let dog = new Dog (16, 'brown');

