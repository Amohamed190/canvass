// HTML famiily tv

// canvas
var cnv = document.getElementById("mycanvas");
var ctx = cnv.getContext("2d");
cnv.width = 650;
cnv.height = 500;
let sunx = 350;

ctx.fillStyle = "orange";
ctx.fillRect(0, 0, 650, 500);

// couch
ctx.fillStyle = "maroon";
ctx.fillRect(0, 400, 150, 300);

for (let i = 0; i < 1; i++) {
  ctx.fillRect(0 + 50 * i, 300, 30, 300);
}

// stick human 1

//stickman leg
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(125, 400); //butt
ctx.lineTo(185, 400);
ctx.lineTo(185, 450); //knee
ctx.stroke();

// stickman torso
ctx.lineWidth = 3;
ctx.strokeStyle = "balck";
ctx.beginPath();
ctx.moveTo(125, 400); //butt
ctx.lineTo(125, 305);
ctx.stroke();

// Arm
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(125, 330);
ctx.lineTo(200, 320);
ctx.stroke();

// Head
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(125, 285, 20, 0, 2 * Math.PI);
ctx.stroke();

// stick human 2
//stickman arm
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(50, 400); //butt
ctx.lineTo(50, 330);
ctx.lineTo(100, 350); //knee
ctx.stroke();

// stickman torso
ctx.lineWidth = 3;
ctx.strokeStyle = "balck";
ctx.beginPath();
ctx.moveTo(50, 400); //butt
ctx.lineTo(50, 305);
ctx.stroke();

// leg
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(50, 400);
ctx.lineTo(100, 400); // knee
ctx.stroke();

// Head
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(50, 285, 20, 0, 2 * Math.PI);
ctx.stroke();

// remote
ctx.lineWidth = 5;
ctx.strokeStyle = "gray";
ctx.beginPath();
ctx.moveTo(200, 320);
ctx.lineTo(230, 310);
ctx.stroke();

// table
ctx.fillStyle = "maroon";
ctx.fillRect(500, 400, 150, 300);

// tv
ctx.fillStyle = "black";
ctx.fillRect(550, 200, 25, 200);

// window
ctx.fillStyle = "lightblue";
ctx.fillRect(250, 120, 150, 150);

//window line 1
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(250, 273);
ctx.lineTo(250, 120);
ctx.stroke();

//window line 2
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(400, 270);
ctx.lineTo(250, 270);
ctx.stroke();

//window line 3
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(400, 120);
ctx.lineTo(250, 120);
ctx.stroke();

//window line 4
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(400, 120);
ctx.lineTo(400, 273);
ctx.stroke();

//window line 5
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(325, 120);
ctx.lineTo(325, 273);
ctx.stroke();

//sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(350, 150, 20, 0, 2 * Math.PI);
ctx.fill();

// sun varbles

// sun elements
let sun1 = document.getElementById("sun1");
let sun2 = document.getElementById("sun2");
let sun3 = 10;
let sunFrame = 0;
let beforesun = sun1;

requestAnimationFrame(draw);
function draw() {}
// sun animation
sun3 += 1;
if (sun3 >= cnv.width) {
  sun3 = -100;
}
// sunset
ctx.drawImage();

//painting
let cris = document.getElementById("cris");
ctx.drawImage(cris, 100, 100, 100, 150);
ctx.fillRect;
//cloud
let cloud = document.getElementById("cloud");
ctx.drawImage(cloud, 250, 120, 50, 65);

// paintng line
ctx.lineWidth = 5;
ctx.strokeStyle = "gray";
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(100, 250);
ctx.stroke();

// Animation
sunx = sunx + 1;
