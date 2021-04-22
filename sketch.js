var starImg, fairyImg, bgImg;
var fairy, fairyVoice, ff;
var star, starBody, starG;
var score=0;

function preload(){
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	
    ff = createSprite(255,510,25,25);
    ff.visible = false

	starG = new Group();
}


function draw() {
  background(bgImg);

  //ff.depth = starG.depth+1;

  
  if(frameCount % 80 === 0){
	  starFalling();
  }
  if(ff.isTouching(starG)){
	  starG.setVelocityYEach(0);
	  score = score+1;
	  starG.destroyEach();
  }	
  
	  fairyVoice.play(); 
  
	  if(keyDown(LEFT_ARROW)){
		fairy.x = fairy.x - 5;
		ff.x = ff.x - 5
	}
	if(keyDown(RIGHT_ARROW)){
		fairy.x = fairy.x + 5;
		ff.x=ff.x+5;
	}

  drawSprites();
  textSize(20);
  fill("white");
  text("Score: " + score,375,50);
}

function keyPressed() {
	//write code here
    
}

function starFalling() {
	star = createSprite(Math.round(random(20,650)),30);
	star.addImage(starImg);
	star.velocityY=2 + score/3;
	star.scale = random(0.1,0.25);
	starG.add(star);
}
