var saturn, uranus, neptune, venus, earth, jupiter, mars, mercury, moon, lock, sun, start;
var saturnImage, uranusImage, neptuneImage, venusImage, earthImage, jupiterImage, marsImage, mercuryImage, moonImage, lockImage, sunImage, startImage, galaxyImage;
var gameState=null;
var cover
function preload(){
  sunImage= loadImage("ussun.png")
  saturnImage= loadImage("ussaturn.png")
  uranusImage= loadImage("usuranus.png")
  neptuneImage= loadImage("usneptune.png")
  venusImage= loadImage("usvenus.png")
  earthImage= loadImage("usearth.png")
  jupiterImage= loadImage("usjupiter.png")
  marsImage= loadImage("usmars.png")
  mercuryImage= loadImage("usmercury.png")
  moonImage= loadImage("usmoon.png")
  lockImage= loadImage("uslock.png")
  sunImage= loadImage("ussun.png")
  startImage= loadImage("usstart.png")
  galaxyImage= loadImage("usgalaxy.jpg")
}
function setup() {
  createCanvas( windowWidth, windowHeight);
  
  sun=createSprite(width/1.1-width/2,height/2-400,50,50)
  sun.addImage("su",sunImage)
  sun.scale=1.2
  sun.visible=true

  saturn=createSprite(width/1.1-width/2,height/2+800,50,50)
  saturn.addImage("sa",saturnImage)
  saturn.scale=.3

  uranus=createSprite(width/1.17-width/2,height/2+960,50,50)
  uranus.addImage("ur",uranusImage)
  uranus.scale=.2

  neptune=createSprite(width/.95-width/2,height/2+1060,50,50)
  neptune.addImage("ne",neptuneImage)
  neptune.scale=.3

  venus=createSprite(width/1.2-width/2,height/2+100,50,50)
  venus.addImage("ve",venusImage)
  venus.scale=.3

  earth=createSprite(width/1.13-width/2,height/2+300,50,50)
  earth.addImage("ea",earthImage)
  earth.scale=.3

  jupiter=createSprite(width/1.3-width/2,height/2+650,50,50)
  jupiter.addImage("ju",jupiterImage)
  jupiter.scale=.3

  mars=createSprite(width/1-width/2,height/2+460,50,50)
  mars.addImage("ma",marsImage)
  mars.scale=.3

  mercury=createSprite(width/1-width/2,height/2-100,50,50)
  mercury.addImage("mer",mercuryImage)
  mercury.scale=.3
  
  
}

function draw() {
  background(220);
  // this is question 1 from the game
  sun.velocityX=0
  sun.velocityY=0

  saturn.velocityX=0
  saturn.velocityY=0

  uranus.velocityX=0
  uranus.velocityY=0

  neptune.velocityX=0
  neptune.velocityY=0

  venus.velocityX=0
  venus.velocityY=0

  
  earth.velocityX=0
  earth.velocityY=0

  
  jupiter.velocityX=0
  jupiter.velocityY=0

  mars.velocityX=0
  mars.velocityY=0
  
  mercury.velocityX=0
  mercury.velocityY=0

  if(keyDown("d")){
    sun.velocityX=-5
    sun.velocityY=0
  
    saturn.velocityX=-5
    saturn.velocityY=0
  
    uranus.velocityX=-5
    uranus.velocityY=0
  
    neptune.velocityX=-5
    neptune.velocityY=0
  
    venus.velocityX=-5
    venus.velocityY=0
  
    
    earth.velocityX=-5
    earth.velocityY=0
  
    
    jupiter.velocityX=-5
    jupiter.velocityY=0
  
    mars.velocityX=-5
    mars.velocityY=0
    
    mercury.velocityX=-5
    mercury.velocityY=0
  }

  if(keyDown("a")){
    sun.velocityX=5
    sun.velocityY=0
  
    saturn.velocityX=5
    saturn.velocityY=0
  
    uranus.velocityX=5
    uranus.velocityY=0
  
    neptune.velocityX=5
    neptune.velocityY=0
  
    venus.velocityX=5
    venus.velocityY=0
  
    
    earth.velocityX=5
    earth.velocityY=0
  
    
    jupiter.velocityX=5
    jupiter.velocityY=0
  
    mars.velocityX=5
    mars.velocityY=0
    
    mercury.velocityX=5
    mercury.velocityY=0
  }

  if(keyDown("w")){
    sun.velocityX=0
    sun.velocityY=5
  
    saturn.velocityX=0
    saturn.velocityY=5
  
    uranus.velocityX=0
    uranus.velocityY=5
  
    neptune.velocityX=0
    neptune.velocityY=5
  
    venus.velocityX=0
    venus.velocityY=5
  
    
    earth.velocityX=0
    earth.velocityY=5
  
    
    jupiter.velocityX=0
    jupiter.velocityY=5
  
    mars.velocityX=0
    mars.velocityY=5
    
    mercury.velocityX=0
    mercury.velocityY=5
  }

  if(keyDown("s")){
    sun.velocityX=0
    sun.velocityY=-5
  
    saturn.velocityX=0
    saturn.velocityY=-5
  
    uranus.velocityX=0
    uranus.velocityY=-5
  
    neptune.velocityX=0
    neptune.velocityY=-5
  
    venus.velocityX=0
    venus.velocityY=-5
  
    
    earth.velocityX=0
    earth.velocityY=-5
  
    
    jupiter.velocityX=0
    jupiter.velocityY=-5
  
    mars.velocityX=0
    mars.velocityY=-5
    
    mercury.velocityX=0
    mercury.velocityY=-5
  }


 drawSprites();
    
}

  