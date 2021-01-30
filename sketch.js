var plane, planeImg;
var castle, castleImg;
var bird, birdImg;
var  runway, runwayImg;
var background, backgroundImg;

function preload(){
planeImg= loadImage("Images/Plane.png");
castleImg= loadImage("Images/Castle.png");
birdImg= loadImage("Images/Bird.png");
runwayImg= loadImage("Images/Runway.png");
backgroundImg= loadImage("Images/Bg6.jpg");

}

function setup(){
createCanvas(1400,600);
background=createSprite(350,300,150,300);
background.addImage(backgroundImg); 
background.scale= 3;
background.velocityX= -3;
//background.x= background.width/2;
}


function draw(){

if(background.x <200){
background.x= background.width/2;
}   

drawSprites();
}
