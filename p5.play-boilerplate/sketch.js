var player, camx, health;
var camSpeed;
var test;
var ground, isJumping, isGrounded, isMoving;
var enemies = [];
var platforms = [];
var score = 0;
var gameState = "start";
var second = 166;
var timer = 30;
var defaultTime = 30;
var shurikens = [];
var toggle = false;
var shuriken;
var damageCount, healthbar;
var enemyDed, platWent;
var musicCount = 0;
var lines;
var level;
// Existing code unchanged.



// One-liner to resume playback when user interacted with the page
function preload(){
  bgrnd = loadImage("Assets/DojoBackground.png");
  plank1 = loadImage("Assets/plank1.jpg");
  plank2 = loadImage("Assets/plank2.png");
  plank3 = loadImage("Assets/plank3.png");
  plank4 = loadImage("Assets/plank4.png");
  plank5 = loadImage("Assets/plank5.png");
  plank6 = loadImage("Assets/plank6.png");
  plank8 = loadImage("Assets/plank8.png");
  plank10 = loadImage("Assets/plank10.png");
  plank12 = loadImage("Assets/plank12.png");
  plank20 = loadImage("Assets/plank20.png");
  playerIdle = loadImage("Assets/playerIdle.png");
  player1 = loadImage("Assets/player1.png");
  player2 = loadImage("Assets/player2.png");
  enemyIdle = loadImage("Assets/enemyIdle.png");
  enemy1 = loadImage("Assets/enemy1.png");
  enemy2 = loadImage("Assets/enemy2.png");
  enemyIdle2 = loadImage("Assets/enemyIdle2.png");
  enemy12 = loadImage("Assets/enemy12.png");
  enemy22 = loadImage("Assets/enemy22.png");
  playerIdle2 = loadImage("Assets/playerIdle2.png");
  player12 = loadImage("Assets/player12.png");
  player22 = loadImage("Assets/player22.png");
  shurikenz = loadImage("Assets/shuriken.png");
  enemyAnimation = loadAnimation(enemyIdle,enemyIdle,enemy1,enemy1,enemy2,enemy2,enemy1,enemy1);
  enemyAnimation2 = loadAnimation(enemyIdle2,enemyIdle2,enemy12,enemy12,enemy22,enemy22,enemy12,enemy12);
  intro = loadSound("Assets/ninjaIntro.wav");
  main = loadSound("Assets/ninjaMain.wav");
  sound1 = loadSound("Assets/Ebombay.wav");
  sound2 = loadSound("Assets/Meffa.wav");
 // sound3 = loadSound("Assets/silver.wav");
  sound3 = loadSound("Assets/FIRE_.wav");
  sound4 = loadSound("Assets/gex.wav");
  sound5 = loadSound("Assets/lawn-chair.wav");
  jump = loadSound("Assets/Jump.wav");
  kobe = loadSound("Assets/kobe.wav");
  hyah = loadSound("Assets/HYAH.wav");
}

function setup() {
  
  createCanvas(1600,800);
  //setting up the background images
  isMoving = true;
  back8 = createSprite(-800,400,1600,800);
  back8.addImage(bgrnd);
  back8.scale = 1.5;

  back = createSprite(800,400,1600,800);
  back.addImage(bgrnd);
  back.scale = 1.5;

  back2 = createSprite(2400,400,1600,800);
  back2.addImage(bgrnd);
  back2.scale = 1.5;

  back3 = createSprite(4000,400,1600,800);
  back3.addImage(bgrnd);
  back3.scale = 1.5;

  back4 = createSprite(5600,400,1600,800);
  back4.addImage(bgrnd);
  back4.scale = 1.5;

  back5 = createSprite(7200,400,1600,800);
  back5.addImage(bgrnd);
  back5.scale = 1.5;

  back6 = createSprite(8800,400,1600,800);
  back6.addImage(bgrnd);
  back6.scale = 1.5;

  back7 = createSprite(10400,400,1600,800);
  back7.addImage(bgrnd);
  back7.scale = 1.5;
//creating the player
  player = createSprite(500,700,100,100);
  player.addAnimation("asd,",playerIdle);
  player.scale = 1;
  //borders
  wallL = createSprite(0,400,20,800);
  wallL.shapeColor = "#291b0a";

  wallR = createSprite(10000,400,20,800);
  wallR.shapeColor = "#291b0a";

  //player.shapeColor = "lime";
  //initializing important variables
  playSpeed = 0;
  camSpeed = 0;
  health = 300;
  enemyDed = 0;
  platWent = 0;
  //healthbar = createSprite(800,70,health*2,100);
  //ground stuff
  ground = createSprite(6000,800,20000,20);
  ground.shapeColor = "#3f2c1a";
  //tells us if we are jumping or on the ground
  isJumping = true;
  isGrounded = true;
  //creating the platforms
  platform = new Platform(1800,575,8);
  platforms.push(platform);
  platform.plat.addImage(plank8);

  platform2 = new Platform(2500,430,5);
  platforms.push(platform2);
  platform2.plat.addImage(plank5);

  platform3 = new Platform(3400,500,12);
  platforms.push(platform3);
  platform3.plat.addImage(plank12);

  platform4 = new Platform(4000,300,4);
  platforms.push(platform4);
  platform4.plat.addImage(plank4);

  platform5 = new Platform(5000,400,6);
  platforms.push(platform5);
  platform5.plat.addImage(plank6);
  
  platform6 = new Platform(6200,600,20);
  platforms.push(platform6);
  platform6.plat.addImage(plank20);

  platform7 = new Platform(7200,400,3);
  platforms.push(platform7);
  platform7.plat.addImage(plank3);

  platform8 = new Platform(7700,300,2);
  platforms.push(platform8);
  platform8.plat.addImage(plank2);

  platform9 = new Platform(8300,400,1);
  platforms.push(platform9);
  platform9.plat.addImage(plank1);

  platform10 = new Platform(9000,815,10);
  platforms.push(platform10);
  platform10.plat.addImage(plank10);
  //creating the enemies
  enemy = new Enemy(1900,400);
  enemies.push(enemy);

  

 // enemy2 = new Enemy(2550,500);
  //enemies.push(enemy2);

  

  enemy3 = new Enemy(3550,420);
  enemies.push(enemy3);

  

  enemy4 = new Enemy(5050,300);
  enemies.push(enemy4);


  enemy5 = new Enemy(6000,400);
  enemies.push(enemy5);

  enemy6 = new Enemy(6600,400);
  enemies.push(enemy6);

  

  enemy7 = new Enemy(8700,750);
  enemies.push(enemy7);
  
  
}

function draw() {
  background(20,20,20); 
  //moving the camera
  camera.position.x += camSpeed;
  //healthbar.width = health*2;
  if(gameState == "start"){
    if(keyDown("space")){
      if(keyDown("space")){
        //this sets up audio
        window.onload = function() {
          var context = new AudioContext();
          
        
        context.resume();
        }
        //plays the first part of the song
        intro.amp(0.4);
        intro.play();
      }
      gameState = "play";
    }
    
    
  }
  if(gameState != "start"){
    //plays the second part of the song
    if(musicCount < 5397){
      musicCount += 1;
    }
    if(musicCount == 5297){
      main.amp(0.4);
      main.loop();
    }
  }
  if(gameState == "play"){
    
    if(level == 2){
      
      platform.reset(1800,700,3);
      
  
     /* platform2 = new Platform(2500,400,7);
      platforms.push(platform2);
      platform2.plat.addImage(plank5);
  
      platform3 = new Platform(3400,500,12);
      platforms.push(platform3);
      platform3.plat.addImage(plank12);
  
      platform4 = new Platform(4000,300,4);
      platforms.push(platform4);
      platform4.plat.addImage(plank4);
  
      platform5 = new Platform(5000,400,6);
      platforms.push(platform5);
      platform5.plat.addImage(plank6);
      
      platform6 = new Platform(6200,600,20);
      platforms.push(platform6);
      platform6.plat.addImage(plank20);
  
      platform7 = new Platform(7200,400,3);
      platforms.push(platform7);
      platform7.plat.addImage(plank3);
  
      platform8 = new Platform(7700,300,2);
      platforms.push(platform8);
      platform8.plat.addImage(plank2);
  
      platform9 = new Platform(8300,400,1);
      platforms.push(platform9);
      platform9.plat.addImage(plank1);
  
      platform10 = new Platform(9000,815,10);
      platforms.push(platform10);
      platform10.plat.addImage(plank10);
      //creating the enemies
      enemy = new Enemy(1900,400);
      enemies.push(enemy);
      
      enemy3 = new Enemy(3550,420);
      enemies.push(enemy3);
  
      enemy4 = new Enemy(5050,300);
      enemies.push(enemy4);
  
      enemy5 = new Enemy(6000,400);
      enemies.push(enemy5);
  
      enemy6 = new Enemy(6600,400);
      enemies.push(enemy6);
  
      enemy7 = new Enemy(8700,750);
      enemies.push(enemy7);
    }*/
    
    }
    
    if(frameCount % 166 == 0 && timer >= 0){
      timer -= 1;
    }
    //if the timer runs out u lose
    if(timer == 0){
      gameState = "end";
    }
    //moving around and having animations change
    if(keyDown("d") && isMoving == true){
      player.addAnimation("asd,",playerIdle,playerIdle,player1,player1,player2,player2,player1,player1);
      isMoving = false;
    }
    if(player.isTouching(wallL) || player.isTouching(wallR)){
      camSpeed = 0;
    }
    if(keyDown("a") && isMoving == true){
      player.addAnimation("asd,",playerIdle2,playerIdle2,player12,player12,player22,player22,player12,player12);
      isMoving = false;
    }
    if(keyWentUp("d")){
      isMoving = true;
      player.addImage("asd,",playerIdle);
    }

    if(keyWentUp("a")){
      isMoving = true;
      player.addImage("asd,",playerIdle2);
    }
   
    if(keyDown("d")){
      player.velocityX = 5;

     // camSpeed = 5;
    }
    if(keyWentUp("d")){
      player.velocityX = 0;
      camSpeed = 0;
    }
    if(keyDown("d") && player.x >= camera.position.x + 250){
      //player.velocityX = 5;
      camSpeed = 5;
    }
    //moving the ground with the camera
    //ground.x = camera.position.x;
    if(keyDown("a") && player.x >= 101){
      player.velocityX = -5;
      //camSpeed = -5;
    }
    if((keyDown("a") && player.x <= camera.position.x - 500) && camera.position.x >= 801){
      player.velocityX = -5;
      camSpeed = -5;
    }
  //  console.log(camera.position.x);
    if(keyWentUp("a")){
      player.velocityX = 0;
      camSpeed = 0;
    }
    //creating shurikens
    if(mouseDown() && toggle == false && shuriken == undefined){
      shuriken = new Shuriken();
      toggle = true;
    }
    if(mouseWentUp()){
      toggle = false;
    }
    //jumping
    if(keyDown("SPACE") && !isJumping){ 
      player.velocityY = -8;
      isJumping = true;
      //console.log("jumped");
      isGrounded = false;
    }
    if(isJumping){
      player.velocityY += 0.12;
    }
    //u r now on the ground
    if(player.y >= 738){
      isJumping = false;
      isGrounded = true;
    }
    if(player.y < -150){
      isJumping = true;
    }
    //settings for the enemy
    enemies.forEach(element =>{
      if(element.enemy.y <= 738){
        element.enemy.velocityY += 0.12;
      }
      element.enemy.collide(ground);
      for(var i = 0; i < platforms.length; i++){
        element.enemy.collide(platforms[i].plat);
      }
      //the enemy will start following us once we see it in our screen
      if(camera.position.x >= element.enemy.x - 849){
        element.active(true);
      }
      //killing the enemies
      if(shuriken != null){
        if(element.enemy.isTouching(shuriken.ken)){
          element.health -= 50;
          shuriken.ken.destroy();
          shuriken = null;
        }
      }
      if(element.health == 0){
        //enemy is dead
        element.enemy.destroy();
        element.health = 1;
        element.bar.destroy();
        element = null;
        hyah.amp(0.05);
        hyah.play();
        score += 1;
        enemyDed += 1;
      }
    })
    if(shuriken != undefined){
      //settings for the shurikens
      shuriken.display();
      if(shuriken.ken.x > camera.position.x + 1000 || shuriken.ken.x < camera.position.x - 1000 || shuriken.ken.y > height || shuriken.ken.y < 0){
        shuriken.ken.destroy();
        shuriken = null;
      }
      
    }
    //settings for platforms
    for(var element in platforms){
      player.collide(platforms[element].plat);
      //making u jump on platforms
      if(player.y == platforms[element].plat.y - 76 && player.x + 50 >= platforms[element].plat.x - platforms[element].plat.width/2 && player.x - 50 <= platforms[element].plat.x + platforms[element].plat.width/2 ){
        isJumping = false;
        platforms[element].plat2.shapeColor = "yellow";
        //console.log(health);
        if(player.x + 50 <= platforms[element].plat.x - platforms[element].plat.width/2 || player.x - 50 >= platforms[element].plat.x + platforms[element].plat.width/2){
          isJumping = true;
        }
      }
      //adding ur score when platforms is jumped on
      if(platforms[element].plat2.shapeColor == "yellow" && platforms[element].score == true){
        score += 1;
        platWent += 1;
        platforms[element].score = false;
      }
      //console.log(platforms[element].y);
    }
   // console.log(player.y);
   //16 is the number the score needs to be to win. What happens then is below
    if(score == 16){
      lines = Math.round(random(1,5));
      console.log(lines);
      //plays winning voice lines
      switch(lines){
        case 1:
          sound1.amp(0.1);
          sound1.play()
          break;
        case 2:
          sound2.amp(0.15);
          sound2.play();
          break;
        case 3:
          sound3.amp(0.1);
          sound3.play();
          break;
        case 4:
          sound4.amp(0.4);
          sound4.play();
          break;
        case 5:
          sound5.amp(0.4);
          sound5.play();
          break;
        default:
          sound3.amp(0.1);
          sound3.play();
      }
      gameState = "win";
    }
  }
  if(gameState == "win"){
    //congrats u won. resets things to get ready for another round
    player.velocityX = 0;
    player.velocityY = 0;
    textSize(40);
    fill("lime");
    if(defaultTime >= 16){
      text("You Won! Press Space to Play Again at a Harder Difficulty", camera.position.x - 520,500);
      camSpeed = 0;
      if(keyWentUp("SPACE")){
        //restart game
        score = 0;
        camera.position.x = 800;
        player.x = 300;
        player.y = 700;
        enemies.forEach(i =>{
          i.enemy.destroy();
          i.bar.destroy();
          i = null;
        })
        //reset enemy settings
        enemies = new Array;
        enemy = new Enemy(1900,400);
        enemies.push(enemy);

        //enemy2 = new Enemy(2550,500);
        //enemies.push(enemy2);

        enemy3 = new Enemy(3550,420);
        enemies.push(enemy3);

        enemy4 = new Enemy(5050,300);
        enemies.push(enemy4);

        enemy5 = new Enemy(6000,400);
        enemies.push(enemy5);

        enemy6 = new Enemy(6600,400);
        enemies.push(enemy6);

        enemy7 = new Enemy(8700,750);
        enemies.push(enemy7);
        //reset plat settings
        platforms.forEach(i =>{
          i.plat2.shapeColor = "blue";
          i.score = true;
        })
        platWent = 0;
        enemyDed = 0;
        isJumping = true;
        isGrounded = false;
        gameState = "play";
        //there is less time on the clock now
        defaultTime -= 5
        timer = defaultTime;
        second = 166;
      }
    }
    
      else{
        //it is impossible to beat the game any more, so u beat the game
        text("You Beat the Level! Press Space to Advance to Level 2", camera.position.x - 650,500);
        camSpeed = 0;
      if(keyWentUp("SPACE")){
        //restart game
        level = 2;
        score = 0;
        camera.position.x = 800;
        player.x = 300;
        player.y = 700;
        enemies.forEach(i =>{
          i.enemy.destroy();
          i.bar.destroy();
          i = null;
        })
        //reset enemy settings
        enemies = new Array;
        enemy = new Enemy(1900,400);
        enemies.push(enemy);

        //enemy2 = new Enemy(2550,500);
        //enemies.push(enemy2);

        enemy3 = new Enemy(3550,420);
        enemies.push(enemy3);

        enemy4 = new Enemy(5050,300);
        enemies.push(enemy4);

        enemy5 = new Enemy(6000,400);
        enemies.push(enemy5);

        enemy6 = new Enemy(6600,400);
        enemies.push(enemy6);

        enemy7 = new Enemy(8700,750);
        enemies.push(enemy7);
        //reset plat settings
        platforms.forEach(i =>{
          i.plat2.shapeColor = "blue";
          i.score = true;
        })
        platWent = 0;
        enemyDed = 0;
        isJumping = true;
        isGrounded = false;
        gameState = "play";
        //there is less time on the clock now
        defaultTime -= 5
        timer = defaultTime;
        second = 166;
      }
    }
  }
  else if(gameState == "end"){
    //uh oh u lost! resets for retry just like winning
    player.velocityX = 0;
    player.velocityY = 0;
    textSize(40);
    fill("red");
    text("Too bad, you Lost! Press Space to Try Again", camera.position.x - 400,500);
    camSpeed = 0;
    if(keyWentUp("SPACE")){
      score = 0;
      camera.position.x = 800;
      player.x = 300;
      player.y = 700;
      enemies.forEach(i =>{
        i.enemy.destroy();
        i.bar.destroy();
        i = null;
      })
      enemies = [];
      enemy = new Enemy(1900,400);
      enemies.push(enemy);

      //enemy2 = new Enemy(2550,500);
      //enemies.push(enemy2);

      enemy3 = new Enemy(3550,420);
      enemies.push(enemy3);

      enemy4 = new Enemy(5050,300);
      enemies.push(enemy4);

      enemy5 = new Enemy(6000,400);
      enemies.push(enemy5);

      enemy6 = new Enemy(6600,400);
      enemies.push(enemy6);

      enemy7 = new Enemy(8700,750);
      enemies.push(enemy7);
      platforms.forEach(i =>{
        i.plat2.shapeColor = "blue";
        i.score = true;
      })
      platWent = 0;
      enemyDed = 0;
      isJumping = true;
      isGrounded = false;
      gameState = "play";
      //NOTE: clock is the same when u lose
      timer = defaultTime;
      second = 166;
     
    }
  }

 //dont go out of bounds!
  player.collide(ground);
  player.collide(wallL);
  player.collide(wallR);
 
  
  drawSprites();
  //HUD that is in the same place at all times uses the camera.off and on loop
  camera.off();
    fill("white");
    textSize(30);
    text("Enemies Defeated: " + enemyDed + "/6",1220,50);
    text("Platforms Reached: " + platWent + "/10", 1220, 100);
    textSize(40);
    if(timer <= 10){
      fill("red");
    }
    text(timer, 40, 50);
    camera.on();
    //text for different scenarios is here. needs to be after drawsprites
  if(gameState == "win" && defaultTime >= 16){
    textSize(40);
    fill("lime");
    text("You Won! Press Space to Play Again at a Harder Difficulty", camera.position.x - 520,500);
  }
  else if(gameState == "win" && defaultTime < 16){
    textSize(40);
    fill("lime");
    text("You Are a True Ninja Warrior! Press Space Again to Play in MASTER MODE", camera.position.x - 650,500);
  }
  else if(gameState == "end"){
    textSize(40);
    fill("red");
    text("Too bad, you Lost! Press Space to Try Again", camera.position.x - 400,500);
  }
  else if(gameState == 'start'){
    text("PRESS 'SPACE' TO START", 600,400);
    textSize(50);
    text("NINJA WARRIOR PARKOUR", 530, 200);
  }
 
}

