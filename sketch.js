//creating variables for the cars.
var audi1,audi2,audi3;
//creating variables for the walls.
var wall1,wall2,wall3;
//creating variables for the lines.
var line1,line2,line3;
//creating borders.
var border1,border2,border3,border4;
var speed, weight;

function setup() {
  createCanvas(1600,800);

speed = random(55,90);
weight = random(400,1500);

// creating lines to separate the sections;
line1 = createSprite(560,200,1600,10);
line1.shapeColor = "black";

line2 = createSprite(800,400,1600,10);
line2.shapeColor = "black";

line3 = createSprite(800,600,1600,10);
line3.shapeColor = "black";

// creating our cars.
 audi1 = createSprite(150, 120, 30, 30);
 audi1.shapeColor = "purple";
 audi1.velocityX = speed;
 
 audi2= createSprite(150,320,30,30);
 audi2.shapeColor = "purple";
 audi2.velocityX = speed;

 audi3 = createSprite(150, 540, 30,30);
 audi3.shapeColor = "purple";
 audi3.velocityX = speed;

// creating our walls for detecting the collision;
wall1 = createSprite(1200,113,10,165);
wall1.shapeColor = "black";

wall2 = createSprite(1200,320,10,165);
wall2.shapeColor = "black";

wall3 = createSprite(1200,520,10,165);
wall3.shapeColor = "black";

//creating the borders for decoration;
border1 = createSprite(800,5,1600,10);
border1.shapeColor = "black";

border2 = createSprite(5,300,10,590);
border2.shapeColor = "black";

border3 = createSprite(1345,300,10,590                                                                                            );
border3.shapeColor = "black";
}





function draw() {
  background("teal");  
if(wall1.x-audi1.x<(audi1.width+wall1.width)/2)
{
  audi1.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22500;
  if (deformation<180)
  {
    audi1.shapeColor = color(255,0,0);
  }
}
if(wall2.x-audi2.x<(audi2.width + wall2.width)/2)
{
audi2.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22500;
if(deformation<180 && deformation >100)
{
audi2.shapeColor = color(230,230,0);
}
}

if(wall3.x-audi3.x<(audi3.width + wall3.width)/2)
{
audi3.velocityX = 0;
var deformation = 0.5 * weight * speed * speed/22500;
if(deformation<100)
{
audi3.shapeColor = color(0,255,0);
}
}

  drawSprites();
}