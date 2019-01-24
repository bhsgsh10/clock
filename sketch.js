const Y_AXIS = 1;
const X_AXIS = 2;

function setup() {
  createCanvas(600, 600);
	angleMode(DEGREES);
	b1 = color(255, 165, 0);
  b2 = color(255, 127, 80);
	
}

function draw() {
	
	let hr = hour();
	let mn = minute();
	let sc = second();
	
	//set background color gradient
	setGradient(0, 0, width / 2, height, b1, b2, X_AXIS, hr);
  setGradient(width / 2, 0, width / 2, height, b2, b1, X_AXIS, hr);
	
	translate(300, 300);
	
	let brownEllipseColor = color(210, 105, 30);
	let redEllipseColor = color(255, 0, 0);
	let greenEllipseColor = color(34, 139, 34);
	
	rotate(-90);
	
	strokeWeight(10);
	stroke(brownEllipseColor);
	ellipse(100, 120, 300, 300);
	stroke(brownEllipseColor);
	ellipse(100, -130, 300, 300);
	stroke(brownEllipseColor);
	ellipse(-70, 0, 300, 300);
	noFill();
	
	strokeWeight(6);
	stroke(255);
	let secHand = map(sc, 0, 60, 0, 360);
	//rotate(6);
	arc(100, -130, 284, 284, 0, secHand);
	secHand = secHand + 20;
	let minHand = map(mn, 0, 60, 0, 360);
	arc(100, 120, 284, 284, 0, minHand);
	let hrHand = map(hr % 12, 0, 12, 0, 360);
	arc(-70, 0, 284, 284, 0, hrHand);
 }

function setGradient(x, y, w, h, c1, c2, axis, hourValue) {
  noFill();
	
	for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, i, x + w, i);
  }

}


