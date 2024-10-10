let x = 320;
let y = 180;

let xspeed = 20;
let yspeed = 2;

let r = 30;
function setup() {
  createCanvas(640, 460);
}

function draw() {
  background (0);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
}
