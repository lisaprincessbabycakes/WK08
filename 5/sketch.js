// TODO: cp 02, but use video

let mCamera; 

function setup() {
    createCanvas (windowWidth, windowHeight);
    mCamera = createCapture(VIDEO); 
    mCamera.size (width/2, width* (3/4));
    
    mCamera.hide();
}

function draw() {
    background(0);
    //image(mCamera, 0,0);
    //mCamera.resize(width, 0);
    mCamera.loadPixels();
  
    let rectDim = 16;
    noStroke();
    for (let y = 0; y < height; y += rectDim) {
      for (let x = 0; x < width; x += rectDim) {
        let pixIdx = y * mCamera.width + x; 
        let p5Idx = 4 * pixIdx;
  
       let redVal = mCamera.pixels[p5Idx + 0];
       let greenVal = mCamera.pixels[p5Idx + 1];
       let blueVal = mCamera.pixels[p5Idx + 2];
  
   
       fill(redVal, greenVal, blueVal);
       let diam = map((greenVal + redVal + blueVal)/3, 0 ,255, 32, 4);
       ellipse(x,y,diam);
  
  
      }
    }
}
    mCamera.updatePixels();
  


function mousePressed(){

}