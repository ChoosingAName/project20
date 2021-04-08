var car, wall
var speed, weight
var deformation
var wall_options

function setup(){
    speed = random(55,90)
    weight = random(400,1500)
    car = createSprite(50, 200,50,50)
    deformation = (0.5 *weight*speed*speed)/22500
    wall = createSprite(400,200, 60,height/2)
    car.velocityX = speed;
}
 
function draw(){
    background("black")
    if(car.isTouching(wall)){
       if(deformation < 80){
           car.shapeColor = "green"
       }
       if(deformation > 80&&deformation < 180){
           car.shapeColor = "yellow"
       }
       if(deformation > 180){
           car.shapeColor = "red"
       }
    }
    gravity = 0
    car.collide(wall)
    drawSprites()
}

