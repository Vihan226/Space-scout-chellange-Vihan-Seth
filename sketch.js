var saturn, uranus, neptune, venus, earth, jupiter, mars, mercury, moon, lock, sun, start;
var saturnImage, uranusImage, neptuneImage, venusImage, earthImage, jupiterImage, marsImage, mercuryImage, moonImage, lockImage, sunImage, startImage, galaxyImage;
var gameState=null;
var cover, intro,rect;
var introImage, coverImage;
var sunhint, saturnhint, uranushint, neptunehint, venushint, earthhint, jupiterhint, marshint, mercuryhint;
var sunhintImage, saturnhintImage, uranushintImage, neptunehintImage, venushintImage, earthhintImage, jupiterhintImage, marshintImage, mercuryhintImage;
function preload(){
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
  sunImage= loadImage("usesun.png")
  startImage= loadImage("usstart.png")
  galaxyImage= loadImage("usgalaxy.jpg")
  introImage= loadImage("speech.png")
  coverImage= loadImage("usstart.png")
  lockImage= loadImage("uslock.png")
  sunhintImage=loadImage("sunhint.png")
  saturnhintImage=loadImage("saturnhint.png")
  uranushintImage=loadImage("uranushint.png")
  mercuryhintImage=loadImage("mercuryhint.png")
}
function setup() {
  createCanvas( windowWidth, windowHeight);
  
  sun=createSprite(width/1.1-width/2,height/2-400,50,50)
  sun.addImage("su",sunImage)
  sun.scale=1.2
  sun.visible=false

  saturn=createSprite(width/1.1-width/2,height/2+1400,50,50)
  saturn.addImage("sa",saturnImage)
  saturn.scale=.3
  saturn.visible=false

  uranus=createSprite(width/1.17-width/2,height/2+1700,50,50)
  uranus.addImage("ur",uranusImage)
  uranus.scale=.2
uranus.visible=false

  neptune=createSprite(width/.95-width/2,height/2+1900,50,50)
  neptune.addImage("ne",neptuneImage)
  neptune.scale=.3
neptune.visible=false

  venus=createSprite(width/1.2-width/2,height/2+400,50,50)
  venus.addImage("ve",venusImage)
  venus.scale=.3
  venus.visible=false

  earth=createSprite(width/1.13-width/2,height/2+650,50,50)
  earth.addImage("ea",earthImage)
  earth.scale=.3
  earth.visible=false

  jupiter=createSprite(width/1.3-width/2,height/2+1050,50,50)
  jupiter.addImage("ju",jupiterImage)
  jupiter.scale=.3
  jupiter.visible=false

  mars=createSprite(width/1-width/2,height/2+800,50,50)
  mars.addImage("ma",marsImage)
  mars.scale=.3
  mars.visible=false

  mercury=createSprite(width/1-width/2,height/2+50,50,50)
  mercury.addImage("mer",mercuryImage)
  mercury.scale=.3
  mercury.visible=false
// x=-640, y=380
  moon=createSprite(width/28-width/.7,height/2-2000,50,50)
  moon.addImage("mer",moonImage)
  moon.scale=.7
moon.visible=true

sunhint=createSprite(width/.75-width/2,height/2-200,50,50)
sunhint.addImage("suh",sunhintImage)
sunhint.scale=1
sunhint.visible=false

saturnhint=createSprite(width/.75-width/2,height/2-200,50,50)
saturnhint.addImage("sah",saturnhintImage)
saturnhint.scale=1
saturnhint.visible=false

uranushint=createSprite(width/.75-width/2,height/2-200,50,50)
uranushint.addImage("urh",uranushintImage)
uranushint.scale=1
uranushint.visible=false

mercuryhint=createSprite(width/.75-width/2,height/2-200,50,50)
mercuryhint.addImage("meh",mercuryhintImage)
mercuryhint.scale=1
mercuryhint.visible=false

  rect=createSprite(width/1-width/2,height/2-100,5000,5000)
  rect.shapeColor="red"

  cover=createSprite(width/1-width/2,height/2+100,50,50)
  cover.addImage("co",coverImage)
  cover.scale=.6

  intro=createSprite(width/1-width/2,height/2-250,50,50)
  intro.addImage("in",introImage)
  intro.scale=.9


  left=0
  up=0
}

function draw() {
  background("red");
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

  moon.velocityX=0
  moon.velocityY=0

  if(keyDown("d")){

    left++

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

    moon.velocityX=-5
    moon.velocityY=0
  }

  if(keyDown("a")){
    left--
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

    moon.velocityX=5
    moon.velocityY=0
  }

  if(keyDown("w")){
    up++

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

    moon.velocityX=0
    moon.velocityY=5
  }

  if(keyDown("s")){
    up--

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

    moon.velocityX=0
    moon.velocityY=-5
  }
  if(mousePressedOver(cover)){
 gameState="solar"
   
     }
// game state change to the main solar systen
  if(gameState==="solar"){
    background(galaxyImage)
    rect.destroy()
    cover.destroy()
    intro.destroy()
    saturn.visible=true
sun.visible=true
earth.visible=true
venus.visible=true
uranus.visible=true
neptune.visible=true
jupiter.visible=true
mars.visible=true
mercury.visible=true
moon.visible=true

// open the hints
if(mousePressedOver(sun)){
sunhint.visible=true
}

if(mousePressedOver(sunhint)){
  sunhint.visible=false
  }


  if(mousePressedOver(saturn)){
    saturnhint.visible=true
    }
    
    if(mousePressedOver(saturnhint)){
      saturnhint.visible=false
      }

      if(mousePressedOver(uranus)){
        uranushint.visible=true
        }
        
        if(mousePressedOver(uranushint)){
          uranushint.visible=false
          }

          if(mousePressedOver(mercury)){
            mercuryhint.visible=true
            }
            
            if(mousePressedOver(mercuryhint)){
              mercuryhint.visible=false
              }

// x=-640, y=380 MOON
// make hints and take pictures of them and once click on the planet show hint.
fill("red")
textSize(20)
text("X- Direction: "+left,width/1.75-width/2,height/2-250)
text("Y- Direction: "+up,width/1.52-width/2,height/2-250)

fill("white")
text("Find MOON with hints from planets and once you find it  ",width/.9-width/2,height/2-350)
text("click on it and go to an adventure of Moon and learn many new things!  ",width/.9-width/2,height/2-330)
   }
 drawSprites();
    
}

  