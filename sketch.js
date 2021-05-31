var bullet,wall,thickness;
var speed,wieght;

function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
 bullet = createSprite(50, 200, 50, 50);
 wall = createSprite(1500,200,100,height/2);
 
 speed=random(223,321);
 weight=random(30,52);
bullet.velocityX= speed;

}

function draw() {
  background(0,0,0);  
if(wall.x=bullet.x <(bullet.width+wall.width/2))
{
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {
    bullet.shapeColor=color("red");
  }
  if(deformation<180 && deformation>100)
  {
    bullet.shapeColor=color("yellow");
  }
  if(deformation<100)
  {
    bullet.shapeColor=color("green");
  }
}

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness)

  if(damage>10)
  {
    wall.shapeColor="green";
  }
  if(damage<10)
  {
    wall.shapeColor="red";
  }
}


  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
