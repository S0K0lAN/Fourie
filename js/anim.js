let time = 0;
let wave = [];

let slider;

function setup() {
  createCanvas(800, 400);
  slider = createSlider(1, 10, 1);
}


    
function draw() {
  background(255, 255, 255);
  
  translate(200, 200);
  let x = 0;
  let y = 0;
  
  for(let i = 0 ; i < slider.value(); ++i){
    let prevx = x;
    let prevy = y;
    let n = i * 2 + 1;
    
    let radius = 50 * (4 / (n * PI));
    x += radius * cos(n * time);
    y += radius * sin(n * time);
    
  
  
    stroke(0, 100);
    noFill();
    ellipse(prevx, prevy, radius * 2);


    //fill(255);
    stroke(0);
    line(prevx, prevy, x, y);
    //ellipse(x, y, 8);
  }
  
  wave.unshift(y);
  translate(200, 0);
  line(x - 200, y, 0, wave[0]);
  beginShape();
  noFill();
  stroke(0);
  for(let i = 0; i <  wave.length; ++i){
    vertex(i, wave[i]);
  }
  endShape();
  
  
  time += 0.05;
  
  if(wave.length > 250) {
    wave.pop();
  }
}