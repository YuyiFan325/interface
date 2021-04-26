var canvas;
var drawing =[];

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

function setup(){
	canvas=createCanvas(windowWidth, windowHeight*2);
	canvas.position(0,0);
	canvas.style('z-index', '-1');
	background(255);
}

function draw(){
	if(mouseIsPressed){
		var point = {
			x: mouseX,
			y: mouseY
		}
		drawing.push(point);
	}	

	beginShape();
	stroke(0,0,0,5);
	strokeWeight(100);
	strokeCap(ROUND);
	noFill();
	for (var i=0;i<drawing.length;i++){
		vertex(drawing[i].x, drawing[i].y)
	}
	endShape();
}
