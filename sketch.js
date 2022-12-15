 var backgroundImg,backGround
 var spaceShip,spaceShipImg
 var starsGroup,starImg,star
 var edges
 

function preload(){
backgroundImg = loadImage("bg_space_seamless_1.png")
spaceShipImg = loadImage("spaceship.png")
starImg = loadImage("star.png")

}
function setup(){
  createCanvas(1650,820)

 backGround = createSprite(900,450)
 backGround.addImage(backgroundImg)
 backGround.velocityX = -3
 backGround.scale = 3

 
 

  spaceShip = createSprite(150,400,20,50);
  spaceShip.addImage(spaceShipImg)
  spaceShip.scale = 0.75

  starsGroup = createGroup()
  




}

function draw() {
 background(0)

 if(backGround.x < 900) {
  backGround.x = 1000
 }

 



if (keyDown("UP_ARROW")&& spaceShip.y >= 10 ) {
  spaceShip.velocityY = -5;
 
}
spaceShip.y = spaceShip.y +0.5

if (keyDown("DOWN_ARROW")&& spaceShip.y <= 0 ) {
  spaceShip.velocityY = 5;
}

/*if(spaceShip.y > 100 && spaceShip.y < 600) {
  if (keyDown("UP_ARROW") ) {
    spaceShip.velocityY = -5;
  } 

  if (keyDown("DOWN_ARROW") ) {
    spaceShip.velocityY = 5;
  
}
}*/





spawnStars()



drawSprites()
}

function spawnStars() {
  if (frameCount % 55 === 0) {
    star = createSprite(1450,100,40,10)
    star.y = Math.round(random(10,800))
    star.addImage(starImg)
    star.scale = 0.15
    star.velocityX = -3


    star.lifetime = 450

    star.depth = spaceShip.depth

    starsGroup.add(star)
  }
}
