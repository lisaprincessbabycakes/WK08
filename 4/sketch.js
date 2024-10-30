// TODO: saving images

let mImg;
let mPg;

function preload() {
  mImg = loadImage("../assets/arara.jpg");
}

function mPgStar(x, y, w, c) {
  c = c | (w / 10);
  mPg.push();
  mPg.translate(x, y);
  mPg.beginShape();
  let r = w / 2;
  mPg.vertex(0, -r);
  mPg.vertex(c, -c);
  mPg.vertex(r, 0);
  mPg.vertex(c, c);
  mPg.vertex(0, r);
  mPg.vertex(-c, c);
  mPg.vertex(-r, 0);
  mPg.vertex(-c, -c);
  mPg.endShape(CLOSE);
  mPg.pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mPg = createGraphics(mImg.width, mImg.height);

  mPg.background(0,0);
  mPg.fill (255);
  star(300, 300, 400, 40, mPg); 
  // stroke(0);
  // fill(255);
  // star(width / 2, height / 2, 400)

  mImg.mask(mPg);


  image(mImg, 0,0);
  star(100, 100, 400, 40, this);
  
}

function draw() {}

// function mousePressed(){
//   save("star_mask.png"); 
// }