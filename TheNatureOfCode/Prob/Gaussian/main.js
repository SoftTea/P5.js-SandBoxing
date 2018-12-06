
let t = 0
let ranGausArr = new Array (100);

function setup () {
    createCanvas( 500,500)

    background (0)
    stroke ( 255)
    
    fill (255,50)
    
    for ( let i = 0 ; i < ranGausArr.length ; i ++) {

        // randomGaussian ( mean ,standardDeviation )
    
        ranGausArr[i] =  abs (randomGaussian(1) )

    
    
    }


    ranGausArr.sort();
    const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    let avg = arrAvg(ranGausArr)

    for ( let i = 0 ; i < ranGausArr.length ; i ++) { 
    let widthMapX1 = map (i , 0 , ranGausArr.length , 0 , width)
    let widthMapX2 = map (ranGausArr[i] , 0 , ranGausArr.length , 0 , width)
    let heightMap = map (  abs (ranGausArr[i] -avg ) , 0, ranGausArr[ranGausArr.length-1] , 0 , height)

    ellipse (widthMapX1 ,   heightMap  , 20 )
    // line ( widthMapX1,ranGausArr[i-1], widthMapX2 , ranGausArr[i] )
    }
        

    
    console.log(ranGausArr)
    
   
}


 function draw () {

  
    // randomGaussian ( mean ,standardDeviation )
    
    // background (0)
    // for (let i = 0 ; i < ranGausArr.length ; i ++) {

    //     let widthMapX1 = map (i , 0 , ranGausArr.length , 0 , width)
    //     let widthMapX2 = map (i + 1 , 0 , ranGausArr.length , 0 , width)
    // line ( widthMapX1,ranGausArr[i-1], widthMapX2 , ranGausArr[i]  )

    // }
    
    // ranGausArr.unshift ( ranGausArr.pop() )
   
    
    
 }