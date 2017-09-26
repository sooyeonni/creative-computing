 function setup() { 
 	createCanvas(windowWidth, windowHeight); 
 	background(50,0,50);

}

function draw() {
	if (mouseIsPressed) {
		var size = random(10, 300);
		ellipse(mouseX, mouseY, size, size); }
}
