status="";

function setup(){
canvas=createCanvas(480,380);
canvas.position(380,100);
canvas.center;

video=createCapture(VIDEO);
video.hide();
video.size(480,390)
}

function start(){
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
thing=document.getElementById("object_name").value;
}

function modelLoaded() {
console.log("Model Loaded");
status=true;
}

function draw(){
image(video,0,0,480,380);
}