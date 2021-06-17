var bullet,wall,speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(wall.isTouching(bullet)){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation<100){
      bullet.shapeColor='green';
    }
    if(deformation>100 && deformation<180){
      bullet.shapeColor='yellow';
    }
    if(deformation>180){
      bullet.shapeColor=color('red');
    }
  }
  drawSprites();
}