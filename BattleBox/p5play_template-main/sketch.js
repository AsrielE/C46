var box
var wall
var wall2
var wall3
var wall4
var bullet
var trophy
var enemy
var enemies
var bullets
var score=0
function preload(){
bulletImg = loadImage("pixil-frame-0 (3).png")
trophyImg = loadImage("pixil-frame-0 (7).png")
enemyImg = loadImage("pixil-frame-0 (1).png")
}

function setup() {
  createCanvas(750,650);
  box = createSprite(375,325,40,40)
  wall = createSprite(375,515,375,10)
  wall2 = createSprite(375,135,375,10)
  wall3 = createSprite(560,325,10,375)
  wall4 = createSprite(195,325,10,375)

  
  
  wall.shapeColor = "white"
  wall2.shapeColor = "white"
  wall3.shapeColor = "white"
  wall4.shapeColor = "white"
  box.shapeColor = "yellow"
bullets = new Group()
  enemies = new Group()

}

function draw() 
{
  background(30);
  textSize(22)
text("Score:" + score,325,105)

if(keyDown("w")){
  box.y = box.y - 3
}
if(keyDown("a")){
  box.x = box.x - 3
}
if(keyDown("d")){
  box.x = box.x + 3
}
if(keyDown("s")){
  box.y = box.y + 3
}
if(score%50===0&&score>0){
  trophy = createSprite(450,105,20,20)
trophy.addImage(trophyImg)
trophy.scale = 4
trophy.lifetime = 50
}
drawSprites()
box.collide(wall3)
box.collide(wall4)
box.bounceOff(wall)
box.bounceOff(wall2)
spawnEnemy()
}
function spawnEnemy(){
  if(frameCount%85===0){
  enemy = createSprite(random(225,520),random(150,490),40,40)
  enemy.addImage(enemyImg)
  enemy.scale = 4
  enemy.lifetime = 315
enemies.add(enemy)
enemy.setCollider("circle",0,0,5)
  }
  if(keyWentDown(UP_ARROW)){
    bullet = createSprite(box.x,box.y,40,40)
    bullet.addImage(bulletImg)
    bullet.scale = 3
    bullet.velocityY = -4
    bullet.lifetime = 125
    bullets.add(bullet)
    bullet.setCollider("circle",0,0,5)
  }
  if(bullets.isTouching(enemies)){
    enemy.destroy()
    score += 1
  }

}



