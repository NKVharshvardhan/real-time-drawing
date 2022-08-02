var nosex=0
var nosey=0
var rightwristx=0
var leftwristx=0
var difference=0

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
}

function modelloaded(){
    console.log("poseNet is loaded");
}

function draw(){
background("#0000FF");
document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
fill("#00e6ff");
stroke("#00e6ff");
square(nosex,nosey,difference)

}

function gotposes(results){
if(results.length>0)
{
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nosex= "+nosex+"nosey= "+nosey);

leftwristx=results[0].pose.leftwrist.x;
rightwristx=results[0].pose.leftwrist.x;
difference=floor(leftwristx-rightwristx); //floor is used to remove the decimal points
console.log("leftwristx= "+leftwristx+"rightwristx= "+rightwristx);

}
}