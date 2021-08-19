var bgImg;
var bg;
var soldier,soldierImg, soldeirStanding;
var gameState = 0;
var GameState = 5;
var State = serve;
var menuBar;
var start;
var level1;
var invisibleGround, invisibleGround2,invisibleGround3; 
var zombie, zombieImg, zombie2, zombie3, zombie4, zombie5, zombie6, zombie7;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var block26, block27, block28, block29;
var spike9, spike10, spike11, spike12, spike13, spike14, spike15, spike16, spike17, spike18;
var ammoGroup, bullet;
var invisibleGround4, invisibleGround5, invisibleGround6, invisibleGround7, invisibleGround8, invisibleGround9, invisibleGround10, invisibleGround11, invisibleGround12, invisibleGround13, invisibleGround14;
var spike1, spike2, spike3, spike4, spike5, spike6, spike7, spike8;
function preload()
{
  bgImg = loadAnimation("Images/forest5.jpg");
  bgImg2 = loadAnimation("Images/forest8.png");
  soldierImg = loadAnimation("Images/pic1 (2).png", "Images/Pic2 (2).png", "Images/Pic4 (2).png", "Images/Pic5(2).png", "Images/Pic6(2).png");
  soldierImgFlip = loadAnimation("FlippedImages/pic1.png", "FlippedImages/Pic2.png", "FlippedImages/Pic4.png", "FlippedImages/Pic5.png", "FlippedImages/Pic6.png");
  soldeirStanding = loadAnimation("Images/23 (1).png"); 
  soldeirStandingFlip = loadAnimation("FlippedImages/23.png"); 
  soldierCrouch = loadAnimation("Images/25 (1).png");
  soldierCrouchFlip = loadAnimation("FlippedImages/25.png");
  soldierJump = loadAnimation("Images/12 (1).png");
  soldierJumpFlip = loadAnimation("FlippedImages/12.png");
  soldierShooting = loadAnimation("Images/1 (1).png", "Images/2 (1).png", "Images/3 (1).png", "Images/4 (1).png");
  soldierShootingFlip = loadAnimation("FlippedImages/1.png", "FlippedImages/2.png", "FlippedImages/3.png", "FlippedImages/4.png");
  soldierKnife = loadAnimation("Images/6 (1).png", "Images/7 (1).png","Images/8 (1).png","Images/6 (1).png");
  soldierKnifeFlip = loadAnimation("FlippedImages/6.png", "FlippedImages/7.png","FlippedImages/8.png","FlippedImages/6.png");
  wall1Img = loadImage("Images/45.png");
  wall2Img = loadImage("Images/44.png");
  wall3Img = loadImage("Images/47.png");
  wall4Img = loadImage("Images/42.png");
  wall5Img = loadImage("Images/44.png");
  wall6Img = loadImage("Images/36.png");
  wall7Img = loadImage("Images/37.png");
  wall8Img = loadImage("Images/37.png");
  wall9Img = loadImage("Images/36.png");
  wall10Img = loadImage("Images/43.png");
  wall11Img = loadImage("Images/53.png");
  wall12Img = loadImage("Images/53.png");
  wall13Img = loadImage("Images/43.png");
  zombieImg = loadAnimation("Images/zombie2.gif");
  zombieImg2 = loadAnimation("Images/zombie9.gif");
  zombieImg3 = loadAnimation("Images/zombie7.gif");
  spikeImg = loadImage("Images/73 (2).png"); 
  spikeImg2 = loadImage("Images/73 (1).png");
  spikeImg3 = loadImage("Images/73 (1).png");
  spikeImg4 = loadImage("Images/69.png");
  spikeImg5 = loadImage("Images/72.png");
  spikeImg6 = loadImage("Images/72.png");
  spikeImg7 = loadImage("Images/75.png");
  spikeImg8 = loadImage("Images/72.png");

  block1Img = loadImage("Images/37.png");
  block2Img = loadImage("Images/36.png");
  block3Img = loadImage("Images/41.png");
  spike9Img = loadImage("Images/73 (2).png");
  spike11Img = loadImage("Images/73 (1).png");
  block14Img = loadImage("Images/43.png");

  zombieImg4 = loadImage("Images/zombie5.gif");
  zombieImg5 = loadImage("Images/zombie1.gif");
  zombieImg6 = loadImage("Images/zombie9.gif");
  zombieImg7 = loadImage("Images/zombie3.gif");

  spikeImg12 = loadImage("Images/69.png");
  spikeImg13 = loadImage("Images/57.png");

  spikeImg14 = loadImage("Images/57.png");
  spikeImg15 = loadImage("Images/57.png");
  spikeImg16 = loadImage("Images/68.png");
  spikeImg17 = loadImage("Images/72.png");
  spikeImg18 = loadImage("Images/69.png");

  block26Img = loadImage("Images/53.png");

  bulletImg = loadAnimation("Images/bullet.png");
  bulletFlipImg = loadAnimation("Images/bullet1.png");

  startImg = loadImage("Images/button.png");
  }
function setup() {
  createCanvas(windowWidth,windowHeight-0.001);
  bg = createSprite(windowWidth/2,windowHeight/2-240);
  bg.addAnimation("bg2", bgImg2);
  bg.addAnimation("bg", bgImg);
  //bg.y= windowHeight/2-240;
  bg.scale = 2.5;
  //invisibleGround.y = 800;
  
  //bg.shapeColor = "red";
  //bg.scale = 1.6;
  
  zombie = createSprite(windowWidth-600, windowHeight/2+50, 50, 50);
  zombie.addAnimation("zombie", zombieImg);
  zombie.scale = 0.55;
  //zombie.debug = true;
  zombie.velocityX = -2;
  zombie.setCollider("rectangle", 0,27, 120, 180);

  zombie2 = createSprite(windowWidth-420, windowHeight/2+285, 50, 50);
  zombie2.addAnimation("zombie", zombieImg2);
  zombie2.scale = 0.28;
  //zombie2.debug = true;
  zombie2.velocityX = 2;
  zombie2.setCollider("rectangle", 0,0, 200, 290);

  zombie3 = createSprite(windowWidth-220, windowHeight/2-230, 50, 50);
  zombie3.addAnimation("zombie", zombieImg3);
  zombie3.scale = 0.11;
  //zombie3.debug = true;
  zombie3.velocityX = -2;
  zombie3.setCollider("rectangle", 80,0, 450, 840);

  soldier = createSprite(150, 660, 50, 50);
  soldier.addAnimation("standing",soldeirStanding);
  soldier.addAnimation("standingFlip",soldeirStandingFlip);
  soldier.addAnimation("running", soldierImg);
  soldier.addAnimation("runningFlip", soldierImgFlip);
  soldier.addAnimation("crouch", soldierCrouch);
  soldier.addAnimation("crouchFlip", soldierCrouchFlip);
  soldier.addAnimation("jump", soldierJump);
  soldier.addAnimation("jumpFlip", soldierJumpFlip);
  soldier.addAnimation("shoot", soldierShooting);
  soldier.addAnimation("shootFlip", soldierShootingFlip);
  soldier.addAnimation("knife", soldierKnife);
  soldier.addAnimation("knifeFlip", soldierKnifeFlip);
  soldier.scale = 0.3;
  soldier.velocityY = 0;
 // soldier.debug = true;
  soldier.setCollider("rectangle", -25, -5, 200, 390);
  fill("transparent");
  invisibleGround = createSprite(windowWidth/2, 730, windowWidth+1000, 50);
  invisibleGround.shapeColor = "#0C1122";



  spike1 = createSprite(windowWidth-430, windowHeight/2+80);
  spike1.addImage(spikeImg);
  spike1.scale = 1.05;
  // spike1.debug = true;
  spike1.setCollider("rectangle", 0,0, 90, 48);

  spike2 = createSprite(windowWidth-740, windowHeight/2+300);
  spike2.addImage(spikeImg2);
  spike2.scale = 1.2;
  //spike2.debug = true;
  spike2.setCollider("rectangle", 0,0, 120, 48);
  
  spike3 = createSprite(windowWidth-590, windowHeight/2+300);
  spike3.addImage(spikeImg3);
  spike3.scale = 1.2;
  //spike3.debug = true;
  spike3.setCollider("rectangle", 0,0, 120, 48);

  spike4 = createSprite(windowWidth-1470, windowHeight/2-120);
  spike4.addImage(spikeImg4);
  spike4.scale = 0.55;
  //spike4.debug = true;
  spike4.setCollider("circle", 0,0, 70);

  spike5 = createSprite(windowWidth-1020, windowHeight/2-375);
  spike5.addImage(spikeImg5);
  spike5.scale = 1.2;
  //spike5.debug = true;
  spike5.setCollider("rectangle", 0,0,120,48);

  spike6 = createSprite(windowWidth-140, windowHeight/2-370);
  spike6.addImage(spikeImg6);
  spike6.scale = 1.2;
  //spike6.debug = true;
  spike6.setCollider("rectangle", 0,0,120,48);

  spike7 = createSprite(windowWidth-880, windowHeight/2-420);
  spike7.addImage(spikeImg7);
  spike7.scale = 0.8;
  //spike7.debug = true;
  spike7.setCollider("rectangle", 0,160,120,48);

  spike8 = createSprite(windowWidth-1420, windowHeight/2-365);
  spike8.addImage(spikeImg8);
  spike8.scale = 1.2;
  //spike8.debug = true;
  spike8.setCollider("rectangle", 0,0,120,48);

  wall3 = createSprite(windowWidth-190, windowHeight/2-130);
  wall3.addImage(wall3Img);
  wall3.scale = 0.8;
  //wall3.debug = true;
  wall3.setCollider("rectangle", 0,-30, 320, 70);
  
  wall1 = createSprite(windowWidth+10, windowHeight/2-215);
  wall1.addImage(wall1Img);
  wall1.scale = 4;
  //wall1.debug = true;
  wall1.setCollider("rectangle", 0,0,30, 155);

  wall2 = createSprite(windowWidth+10, windowHeight/2+10);
  wall2.addImage(wall2Img);
  wall2.scale = 4;
  //wall2.debug = true;
  wall2.setCollider("rectangle", 0,0,15, 80);

  wall6 = createSprite(windowWidth-860, windowHeight/2-100);
  wall6.addImage(wall6Img);
  wall6.scale = 1.3;
  //wall6.debug = true;
  wall6.setCollider("rectangle", 0,0,210, 45);

  wall5 = createSprite(windowWidth-790, windowHeight/2+40);
  wall5.addImage(wall5Img);
  wall5.scale = 3.3 ;
  //wall5.debug = true;
  wall5.setCollider("rectangle", 0,0,25, 70);

  wall4 = createSprite(windowWidth-560, windowHeight/2+140);
  wall4.addImage(wall4Img);
  wall4.scale = 2.2;
  //wall4.debug = true;
  wall4.setCollider("rectangle", 0,0,200, 35);

  wall7 = createSprite(windowWidth-980, windowHeight/2+ 210);
  wall7.addImage(wall7Img);
  wall7.scale = 0.8;
  //wall7.debug = true;
  wall7.setCollider("rectangle", 0,0,120, 70);
  
  wall8 = createSprite(windowWidth-1190, windowHeight/2+ 90);
  wall8.addImage(wall8Img);
  wall8.scale = 0.8;
  //wall8.debug = true;
  wall8.setCollider("rectangle", 0,0,120, 70);

  wall9 = createSprite(windowWidth-1440, windowHeight/2-60);
  wall9.addImage(wall9Img);
  wall9.scale = 1.2;
  //wall9.debug = true;
  wall9.setCollider("rectangle", 0,0,210, 45);

  wall10 = createSprite(windowWidth-1150, windowHeight/2-200);
  wall10.addImage(wall10Img);
  wall10.scale = 0.65;
  //wall10.debug = true;
  wall10.setCollider("rectangle", 0,0,120, 70);

  wall12 = createSprite(windowWidth/2 - 790, windowHeight/2+150);
  wall12.addImage(wall12Img);
  wall12.scale = 4;
 // wall12.debug = true;
  wall12.setCollider("rectangle", 0,0,25, 155);

  wall11 = createSprite(windowWidth/2 - 790, windowHeight/2-200);
  wall11.addImage(wall11Img);
  wall11.scale = 4;
  //wall11.debug = true;
  wall11.setCollider("rectangle", 0,0,25, 155);


  wall13 = createSprite(windowWidth-540, windowHeight/2-190);
  wall13.addImage(wall13Img);
  wall13.scale = 0.65;
  //wall13.debug = true;
  wall13.setCollider("rectangle", 0,0,120, 70);

  /*wall9 = createSprite(windowWidth-1050, windowHeight/2-60);
  wall9.addImage(wall9Img);
  wall9.scale = 0.6;
  //wall9.debug = true;
  wall9.setCollider("rectangle", 0,0,100, 90);
  wall9.velocityX = -2;

  wall10 = createSprite(windowWidth-1400, windowHeight/2- 130);
  wall10.addImage(wall10Img);
  wall10.scale = 1.5;
  //wall10.debug = true;
  wall10.setCollider("rectangle", 0,-30,130, 55);
*/
  
  ammoGroup = new Group();   

  invisibleGround2 = createSprite(windowWidth-240, windowHeight/2+280, 10, 100);
  invisibleGround2.visible = false;

  invisibleGround3 = createSprite(windowWidth-300, windowHeight/2-230, 10, 100);
  invisibleGround3.visible = false;

  //invisibleGround4 = createSprite(windowWidth/2-200, windowHeight/2+200, 50, 200);

  block1 = createSprite(windowWidth-1150, windowHeight/2+ 240);
  block1.addImage(block1Img);
  block1.scale = 0.6;
  //block1.debug = true;
  block1.setCollider("rectangle", 0,0,120, 70);
  block1.visible = false;

  block2 = createSprite(windowWidth-850, windowHeight/2+ 240);
  block2.addImage(block2Img);
  block2.scale = 0.9;
  //block2.debug = true;
  block2.setCollider("rectangle", 0,0,210, 50);
  block2.visible = false;

  block3 = createSprite(windowWidth-500, windowHeight/2+ 240);
  block3.addImage(block2Img);
  block3.scale = 0.9;
  //block3.debug = true;
  block3.setCollider("rectangle", 0,0,210, 50);
  block3.visible = false;

  block4 = createSprite(windowWidth-100, windowHeight/2+ 240);
  block4.addImage(block2Img);
  block4.scale = 1.1;
  //block4.debug = true;
  block4.setCollider("rectangle", 0,0,200, 50);
  block4.visible = false;

  block5 = createSprite(windowWidth-30, windowHeight/2 + 10);
  block5.addImage(block2Img);
  block5.scale = 0.8;
  //block5.debug = true;
  block5.setCollider("rectangle", 0,0,200, 50);
  block5.visible = false;

  block6 = createSprite(windowWidth-580, windowHeight/2 + 10);
  block6.addImage(block3Img);
  block6.scale = 1;
 // block6.debug = true;
  block6.setCollider("rectangle", 0,15,200, 35);
  block6.visible = false;

  block7 = createSprite(windowWidth-660, windowHeight/2 + 240);
  block7.addImage(block2Img);
  block7.scale = 0.9;
 // block7.debug = true;
  block7.setCollider("rectangle", 0,0,220, 50);
  block7.visible = false;

  block8 = createSprite(windowWidth-95, windowHeight/2 - 200);
  block8.addImage(block2Img);
  block8.scale = 0.9;
  //block8.debug = true;
  block8.setCollider("rectangle", 0,0,220, 50);
  block8.visible = false;

  block9 = createSprite(windowWidth-280, windowHeight/2 - 200);
  block9.addImage(block2Img);
  block9.scale = 0.9;
  //block9.debug = true;
  block9.setCollider("rectangle", 0,0,220, 50);
  block9.visible = false;

  block10 = createSprite(windowWidth-460, windowHeight/2 - 200);
  block10.addImage(block2Img);
  block10.scale = 0.9;
  //block10.debug = true;
  block10.setCollider("rectangle", 0,0,220, 50);
  block10.visible = false;

  block11 = createSprite(windowWidth-640, windowHeight/2 - 200);
  block11.addImage(block2Img);
  block11.scale = 0.9;
 // block11.debug = true;
  block11.setCollider("rectangle", 0,0,220, 50);
  block11.visible = false;

  block12 = createSprite(windowWidth-790, windowHeight/2 - 200);
  block12.addImage(block2Img);
  block12.scale = 0.9;
  //block12.debug = true;
  block12.setCollider("rectangle", 0,0,210, 50);
  block12.visible = false;

  block13 = createSprite(windowWidth-310, windowHeight/2 + 240);
  block13.addImage(block1Img);
  block13.scale = 0.5;
  //block13.debug = true;
  block13.velocityY = -3;
  block13.setCollider("rectangle", 0,0,120, 70);
  block13.visible = false;

  spike9 = createSprite(windowWidth-368 , windowHeight/2+300);
  spike9.addImage(spike9Img);
  spike9.scale = 1.1;
  //spike9.debug = true;
  spike9.setCollider("rectangle", 0,0, 100, 48);
  spike9.visible = false;

  spike10 = createSprite(windowWidth-258, windowHeight/2+300);
  spike10.addImage(spike9Img);
  spike10.scale = 1.1;
  //spike10.debug = true;
  spike10.setCollider("rectangle", 0,0, 100, 48);
  spike10.visible = false;

  spike11 = createSprite(windowWidth-1040, windowHeight/2+300);
  spike11.addImage(spike11Img);
  spike11.scale = 1.1;
  //spike11.debug = true;
  spike11.setCollider("rectangle", 0,0, 120, 48);
  spike11.visible = false;

  spike13 = createSprite(windowWidth-800, windowHeight/2+150);
  spike13.addImage(spikeImg13);
  spike13.scale = 0.5;
  //spike13.debug = true;
  spike13.setCollider("circle", 0,0, 30);
  spike13.velocityY = -5;
  spike13.visible = false;

  block14 = createSprite(windowWidth-465, windowHeight/2-15);
  block14.addImage(block14Img);
  block14.scale = 0.4;
 // block14.debug = true;
  block14.setCollider("rectangle", 0,0,120, 70);
  block14.visible = false;

  block15 = createSprite(windowWidth-160, windowHeight/2-15);
  block15.addImage(block14Img);
  block15.scale = 0.4;
  //block15.debug = true;
  block15.visible = false;
  block15.setCollider("rectangle", 0,0,120, 70);

  block16 = createSprite(windowWidth-830, windowHeight/2-5);
  block16.addImage(block2Img);
  block16.scale = 0.9;
  //block16.debug = true;
  block16.setCollider("rectangle", 0,0,220, 50);
  block16.visible = false;

  block17 = createSprite(windowWidth-1220, windowHeight/2 - 20);
  block17.addImage(block2Img);
  block17.scale = 0.9;
  //block17.debug = true;
  block17.setCollider("rectangle", 0,0,220, 50);
  block17.visible = false;

  block18 = createSprite(windowWidth-1380, windowHeight/2 - 20);
  block18.addImage(block2Img);
  block18.scale = 0.9;
  //block18.debug = true;
  block18.setCollider("rectangle", 0,0,220, 50);
  block18.visible = false;

  block19 = createSprite(windowWidth-1480, windowHeight/2 - 20);
  block19.addImage(block2Img);
  block19.scale = 0.9;
  //block19.debug = true;
  block19.setCollider("rectangle", 0,0,220, 50);
  block19.visible = false;

  block20 = createSprite(windowWidth-1380, windowHeight/2 - 180);
  block20.addImage(block1Img);
  block20.scale = 0.5;
  //block20.debug = true;
  block20.setCollider("rectangle", 0,0,120, 70);
  block20.visible = false;

  block21 = createSprite(windowWidth-1150, windowHeight/2 - 230);
  block21.addImage(block1Img);
  block21.scale = 0.5;
  //block21.debug = true;
  block21.setCollider("rectangle", 0,0,120, 70);
  block21.visible = false;

  zombie4 = createSprite(windowWidth-700, windowHeight/2+180, 50, 50);
  zombie4.addAnimation("zombie4", zombieImg4);
  zombie4.scale = 0.55;
  //zombie4.debug = true;
  zombie4.velocityX = -2;
  zombie4.visible = false;
  zombie4.setCollider("rectangle", 0,25, 120, 188);

  zombie5 = createSprite(windowWidth-1300, windowHeight/2-90, 50, 50);
  zombie5.addAnimation("zombie5", zombieImg5);
  zombie5.scale = 0.3;
  //zombie5.debug = true;
  zombie5.velocityX = 2;
  zombie5.visible = false;
  zombie5.setCollider("rectangle", 0,20, 180, 285);

  zombie6 = createSprite(windowWidth-1350, windowHeight/2-86, 50, 50);
  zombie6.addAnimation("zombie6", zombieImg6);
  zombie6.scale = 0.28;
  //zombie6.debug = true;
  zombie6.velocityX = -2;
  zombie6.setCollider("rectangle", 0,0, 200, 300);
  zombie6.visible = false;
  
  zombie7 = createSprite(windowWidth-550, windowHeight/2-300, 50, 50);
  zombie7.addAnimation("zombie7", zombieImg7);
  zombie7.scale = 0.28;
  //zombie7.debug = true;
  zombie7.velocityX = -2;
  zombie7.setCollider("rectangle", 0,0, 200, 300);
  zombie7.visible = false;

  spike14 = createSprite(windowWidth-280, windowHeight/2-250);
  spike14.addImage(spikeImg14);
  spike14.scale = 0.25;
  //spike14.debug = true;
  spike14.setCollider("circle", 0,0, 30);
  spike14.velocityY = -4;
  spike14.visible = false;

  spike15 = createSprite(windowWidth-635, windowHeight/2-250);
  spike15.addImage(spikeImg15);
  spike15.scale = 0.25;
  //spike15.debug = true;
  spike15.setCollider("circle", 0,0, 30);
  spike15.velocityY = 4;
  spike15.visible = false;

  block22 = createSprite(windowWidth-95, windowHeight/2 - 395);
  block22.addImage(block2Img);
  block22.scale = 0.9;
  //block22.debug = true;
  block22.setCollider("rectangle", 0,0,220, 50);
  block22.visible = false;

  block23 = createSprite(windowWidth-280, windowHeight/2 - 402);
  block23.addImage(block2Img);
  block23.scale = 0.9;
  //block23.debug = true;
  block23.setCollider("rectangle", 0,0,220, 50);
  block23.visible = false;

  block24 = createSprite(windowWidth-460, windowHeight/2 - 395);
  block24.addImage(block2Img);
  block24.scale = 0.9;
  //block24.debug = true;
  block24.setCollider("rectangle", 0,0,220, 50);
  block24.visible = false;

  block25 = createSprite(windowWidth-635, windowHeight/2 - 402);
  block25.addImage(block2Img);
  block25.scale = 0.9;
 // block25.debug = true;
  block25.setCollider("rectangle", 0,0,210, 50);
  block25.visible = false;

  block26 = createSprite(windowWidth/2 - 790, windowHeight/2-200);
  block26.addImage(block26Img);
  block26.scale = 4;
 // block26.debug = true;
  block26.setCollider("rectangle", 0,0,25, 155);
  block26.visible = false;

  block27 = createSprite(windowWidth/2 - 790, windowHeight/2+5);
  block27.addImage(block26Img);
  block27.scale = 4;
 // block27.debug = true;
  block27.setCollider("rectangle", 0,-35,25, 155);
  block27.visible = false;

  block28 = createSprite(windowWidth+50, windowHeight/2+145);
  block28.addImage(block26Img);
  block28.scale = 4;
  //block28.debug = true;
  block28.setCollider("rectangle", 0,0,30, 155);
  block28.visible = false;

  block29 = createSprite(windowWidth+50, windowHeight/2-10);
  block29.addImage(block26Img);
  block29.scale = 4;
  //block29.debug = true;
  block29.setCollider("rectangle", 0,33,30, 155);
  block29.visible = false;

  spike17 = createSprite(windowWidth-1420, windowHeight/2+35);
  spike17.addImage(spikeImg17);
  spike17.scale = 1.3;
  //spike17.debug = true;
  spike17.setCollider("rectangle", 0,0,125,48);
  spike17.visible = false;

  spike18 = createSprite(windowWidth-60, windowHeight/2+180);
  spike18.addImage(spikeImg18);
  spike18.scale = 0.55;
  //spike18.debug = true;
  spike18.setCollider("circle", 0,0, 70);
  spike18.visible = false;

  invisibleGround4 = createSprite(windowWidth-760, windowHeight/2+200, 10, 100);
  invisibleGround4.visible = false;

  invisibleGround5 = createSprite(windowWidth-520, windowHeight/2+200, 10, 100);
  invisibleGround5.visible = false;

  //invisibleGround6 = createSprite(windowWidth-1520, windowHeight/2-85, 10, 100);
  //invisibleGround6.visible = false;
  spike16 = createSprite(windowWidth-1310, windowHeight/2-80);
  spike16.addImage(spikeImg16);
  spike16.scale = 0.8;
  //spike16.debug = true;
  spike16.setCollider("rectangle", 0,0, 35,100);
  //spike16.velocityY = 4;
  spike16.visible = false;

  invisibleGround7 = createSprite(windowWidth-1120, windowHeight/2-85, 10, 100);
  invisibleGround7.visible = false;

  //invisibleGround8 = createSprite(windowWidth-1300, windowHeight/2-85, 5, 100);
  //invisibleGround8.visible = false;

  invisibleGround9 = createSprite(windowWidth-280, windowHeight/2-280, 5, 100);
  invisibleGround9.visible = false;

  invisibleGround10 = createSprite(windowWidth-635, windowHeight/2-280, 5, 100);
  invisibleGround10.visible = false;

  invisibleGround11 = createSprite(-110, windowHeight/2+300, 5, 100);
  invisibleGround11.visible = false;

  invisibleGround12 = createSprite(windowWidth+200, windowHeight/2-220, 500, 10);
  invisibleGround12.visible = false;

  menuBar = createSprite(windowWidth/2, windowHeight/2, 700, 500);
  menuBar.shapeColor = 0;
  
  start = createSprite(windowWidth/2, windowHeight/2+150, 150, 50);
  start.addImage(startImg);

  level1 = createSprite(windowWidth/2, windowHeight/2, 400, 250);
  level1.visible = false;
  level1.shapeColor = 0;

}




function draw() {
  background(0);
    //camera.position.x = soldier.position.x;
  //camera.position.y = soldier.position.y;
  
//if(_gameState === 4)
//{
  
 if(State === 4)
 {

    if(keyDown("d") && soldier.scale===0.3)
  {
    soldier.changeAnimation("running", soldierImg);
    soldier.x = soldier.x + 8;
    GameState = 5;
    soldier.setCollider("rectangle", -25, -5, 200, 390);
  }
  
  if(keyWentUp("d"))
  {
    soldier.changeAnimation("standing", soldeirStanding);
    soldier.scale = 0.3;
  }
  if(GameState === 5)
  {

  
  if(keyWentDown("w") &&soldier.scale === 0.3 && soldier.velocityY === 0)
  {
    soldier.changeAnimation("jump", soldierJump);
    soldier.velocityY = -18  ;
  }

soldier.velocityY = soldier.velocityY + 1;

if(keyWentUp("w"))
{
  soldier.changeAnimation("standing", soldeirStanding);
}

if(keyDown("s") && soldier.isTouching(invisibleGround))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall7))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(wall8))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(wall3))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(wall4))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall6))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(wall9))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall10))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(wall13))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block1))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(block2))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block3))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(block4))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block5))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(block6))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block7))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(block8))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block9))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(block10))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block11))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(block12))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block13))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(block14))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block15))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(block16))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block17))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(block18))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block19))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  if(keyDown("s") && soldier.isTouching(block20))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block21))
  {
    soldier.changeAnimation("crouch", soldierCrouch);
    soldier.scale = 0.24;
  }

  

  if(keyWentUp("s"))
  {
    soldier.changeAnimation("standing", soldeirStanding);
    soldier.scale = 0.3;
  }

  if(keyDown("j"))
{
  soldier.scale = 0.325;
  ammo();
  
}
if(ammoGroup.isTouching(wall1)||ammoGroup.isTouching(wall2)||ammoGroup.isTouching(wall3)||ammoGroup.isTouching(wall4)||ammoGroup.isTouching(wall5)||ammoGroup.isTouching(wall6)||ammoGroup.isTouching(wall7)||ammoGroup.isTouching(wall8)||ammoGroup.isTouching(wall9)||ammoGroup.isTouching(wall10)||ammoGroup.isTouching(wall11)||ammoGroup.isTouching(wall12)||ammoGroup.isTouching(wall13))
{
  ammoGroup.destroyEach();
}
if(ammoGroup.isTouching(spike1)||ammoGroup.isTouching(spike2)||ammoGroup.isTouching(spike3)||ammoGroup.isTouching(spike4)||ammoGroup.isTouching(spike5)||ammoGroup.isTouching(spike6)||ammoGroup.isTouching(spike7)||ammoGroup.isTouching(spike8))
{
  ammoGroup.destroyEach();
}
if(ammoGroup.isTouching(zombie)||ammoGroup.isTouching(zombie2)||ammoGroup.isTouching(zombie3))
{
  ammoGroup.destroyEach();
}

if(gameState === 1)
{
if(ammoGroup.isTouching(block1)||ammoGroup.isTouching(block2)||ammoGroup.isTouching(block3)||ammoGroup.isTouching(block4)||ammoGroup.isTouching(block5)||ammoGroup.isTouching(block6)||ammoGroup.isTouching(block7)||ammoGroup.isTouching(block8)||ammoGroup.isTouching(block9)||ammoGroup.isTouching(block10)||ammoGroup.isTouching(block11)||ammoGroup.isTouching(block12)||ammoGroup.isTouching(block13)||ammoGroup.isTouching(block14)||ammoGroup.isTouching(block15)||ammoGroup.isTouching(block16)||ammoGroup.isTouching(block17)||ammoGroup.isTouching(block18)||ammoGroup.isTouching(block19)||ammoGroup.isTouching(block20)||ammoGroup.isTouching(block21)||ammoGroup.isTouching(block22)||ammoGroup.isTouching(block23)||ammoGroup.isTouching(block24)||ammoGroup.isTouching(block25)||ammoGroup.isTouching(block26)||ammoGroup.isTouching(block27)||ammoGroup.isTouching(block27)||ammoGroup.isTouching(block28)||ammoGroup.isTouching(block29))
{
  ammoGroup.destroyEach();
}
if(ammoGroup.isTouching(spike9)||ammoGroup.isTouching(spike10)||ammoGroup.isTouching(spike11)||ammoGroup.isTouching(spike13)||ammoGroup.isTouching(spike14)||ammoGroup.isTouching(spike15)||ammoGroup.isTouching(spike16)||ammoGroup.isTouching(spike17)||ammoGroup.isTouching(spike18))
{
  ammoGroup.destroyEach();
}
if(ammoGroup.isTouching(zombie4)||ammoGroup.isTouching(zombie5)||ammoGroup.isTouching(zombie6)||ammoGroup.isTouching(zombie7))
{
  ammoGroup.destroyEach();
}
}

if(soldier.scale === 0.325)
{
  soldier.changeAnimation("shoot", soldierShooting);
  bullet.changeAnimation("bullet", bulletImg);

}
if(keyWentUp("j"))
{
  soldier.changeAnimation("standing", soldeirStanding);
  soldier.scale = 0.3;
}


  }
  
  if(keyDown("a") && soldier.scale===0.3)
  {
    soldier.changeAnimation("runningFlip", soldierImgFlip);
    soldier.x = soldier.x - 8;
    GameState = LEFT;
    soldier.setCollider("rectangle", 25, -5, 200, 390);
  }
  
  if(keyWentUp("a"))
  {
    soldier.changeAnimation("standingFlip",soldeirStandingFlip);
    soldier.scale = 0.3;
  }
if(GameState === LEFT)
{

  if(keyWentDown("w") &&soldier.scale === 0.3 && soldier.velocityY === 0)
  {
    soldier.changeAnimation("jumpFlip", soldierJumpFlip);
    soldier.velocityY = -18  ;
  }

soldier.velocityY = soldier.velocityY + 1;

if(keyWentUp("w"))
{
  soldier.changeAnimation("standingFlip",soldeirStandingFlip);
}

if(keyDown("s") && soldier.isTouching(invisibleGround))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall7))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall8))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall3))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall4))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall6))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall9))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall10))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(wall13))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block1))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block2))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block3))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block4))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block5))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block6))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block7))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block8))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block9))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block10))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block11))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block12))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block13))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block14))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block15))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block16))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block17))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block18))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block19))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block20))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  if(keyDown("s") && soldier.isTouching(block21))
  {
    soldier.changeAnimation("crouchFlip", soldierCrouchFlip);
    soldier.scale = 0.24;
  }
  

  if(keyWentUp("s"))
  {
    soldier.changeAnimation("standingFlip",soldeirStandingFlip);
    soldier.scale = 0.3;
  }

  if(keyDown("j"))
{
  soldier.scale = 0.325;
  ammo();
  bullet.velocityX = -20;
  bullet.x = soldier.position.x-40;
}
if(ammoGroup.isTouching(wall1)||ammoGroup.isTouching(wall2)||ammoGroup.isTouching(wall3)||ammoGroup.isTouching(wall4)||ammoGroup.isTouching(wall5)||ammoGroup.isTouching(wall6)||ammoGroup.isTouching(wall7)||ammoGroup.isTouching(wall8)||ammoGroup.isTouching(wall9)||ammoGroup.isTouching(wall10)||ammoGroup.isTouching(wall11)||ammoGroup.isTouching(wall12)||ammoGroup.isTouching(wall13))
{
  ammoGroup.destroyEach();
}
if(ammoGroup.isTouching(spike1)||ammoGroup.isTouching(spike2)||ammoGroup.isTouching(spike3)||ammoGroup.isTouching(spike4)||ammoGroup.isTouching(spike5)||ammoGroup.isTouching(spike6)||ammoGroup.isTouching(spike7)||ammoGroup.isTouching(spike8))
{
  ammoGroup.destroyEach();
}
if(ammoGroup.isTouching(zombie)||ammoGroup.isTouching(zombie2)||ammoGroup.isTouching(zombie3))
{
  ammoGroup.destroyEach();
}

if(gameState === 1)
{
if(ammoGroup.isTouching(block1)||ammoGroup.isTouching(block2)||ammoGroup.isTouching(block3)||ammoGroup.isTouching(block4)||ammoGroup.isTouching(block5)||ammoGroup.isTouching(block6)||ammoGroup.isTouching(block7)||ammoGroup.isTouching(block8)||ammoGroup.isTouching(block9)||ammoGroup.isTouching(block10)||ammoGroup.isTouching(block11)||ammoGroup.isTouching(block12)||ammoGroup.isTouching(block13)||ammoGroup.isTouching(block14)||ammoGroup.isTouching(block15)||ammoGroup.isTouching(block16)||ammoGroup.isTouching(block17)||ammoGroup.isTouching(block18)||ammoGroup.isTouching(block19)||ammoGroup.isTouching(block20)||ammoGroup.isTouching(block21)||ammoGroup.isTouching(block22)||ammoGroup.isTouching(block23)||ammoGroup.isTouching(block24)||ammoGroup.isTouching(block25)||ammoGroup.isTouching(block26)||ammoGroup.isTouching(block27)||ammoGroup.isTouching(block27)||ammoGroup.isTouching(block28)||ammoGroup.isTouching(block29))
{
  ammoGroup.destroyEach();
}
if(ammoGroup.isTouching(spike9)||ammoGroup.isTouching(spike10)||ammoGroup.isTouching(spike11)||ammoGroup.isTouching(spike13)||ammoGroup.isTouching(spike14)||ammoGroup.isTouching(spike15)||ammoGroup.isTouching(spike16)||ammoGroup.isTouching(spike17)||ammoGroup.isTouching(spike18))
{
  ammoGroup.destroyEach();
}
if(ammoGroup.isTouching(zombie4)||ammoGroup.isTouching(zombie5)||ammoGroup.isTouching(zombie6)||ammoGroup.isTouching(zombie7))
{
  ammoGroup.destroyEach();
}
}
if(soldier.scale === 0.325)
{
  soldier.changeAnimation("shootFlip", soldierShootingFlip);
  bullet.changeAnimation("bulletFlip",bulletFlipImg);

}
if(keyWentUp("j"))
{
  soldier.changeAnimation("standingFlip", soldeirStandingFlip);
  soldier.scale = 0.3;
}

} 



  if(gameState === 0 && soldier.x - 100 >windowWidth)
  {

    gameState = 1;
    soldier.x = -150;
    //bg.changeAnimation("bg", bgImg);
    //bg.y= windowHeight/2-100;
    //bg.scale = 1.6;
    //invisibleGround.y = 730;
    //invisibleGround.shapeColor = "#06191D";
    
  }
  if(gameState === 1)
  {
    wall1.remove();
    wall2.remove();
    wall3.remove();
    wall4.remove();
    wall5.remove();
    wall6.remove();
    wall7.remove();
    wall8.remove();
    wall9.remove();
    wall10.remove();
    wall11.remove();
    wall12.remove();
    wall13.remove();

    spike1.remove();
    spike2.remove();
    spike3.remove();
    spike4.remove();
    spike5.remove();
    spike6.remove();
    spike7.remove();
    spike8.remove();

    zombie.remove();
    zombie2.remove();
    zombie3.remove();

   block1.visible = true;
   soldier.collide(block1);
   block2.visible = true;
   soldier.collide(block2);
   block3.visible = true;
   soldier.collide(block3);
   block4.visible = true;
   soldier.collide(block4);
   block5.visible = true;
   soldier.collide(block5);
   block6.visible = true;
   soldier.collide(block6);
   block7.visible = true;
   soldier.collide(block7);
   block8.visible = true;
   soldier.collide(block8);
   block9.visible = true;
   soldier.collide(block9);
   block10.visible = true;
   soldier.collide(block10);
   block11.visible = true;
   soldier.collide(block11);
   block12.visible = true;
   soldier.collide(block12);
   block13.visible = true;
   soldier.collide(block13);
   spike9.visible = true;
   soldier.collide(spike9);
   spike10.visible = true;
   soldier.collide(spike10);
   spike11.visible = true;
   soldier.collide(spike11);
   block14.visible = true;
   soldier.collide(block14);
   block15.visible = true;
   soldier.collide(block15);
   block16.visible = true;
   soldier.collide(block16);
   block17.visible = true;
   soldier.collide(block17);
   block18.visible = true;
   soldier.collide(block18);
   block19.visible = true;
   soldier.collide(block19);
   block20.visible = true;
   soldier.collide(block20);
   block21.visible = true;
   soldier.collide(block21);
   zombie4.visible = true;
   zombie4.collide(block7);
   spike13.visible = true;
   soldier.collide(spike13);
   zombie5.visible = true;
   zombie5.collide(block17);
   zombie6.visible = true;
   zombie6.collide(block18);

   soldier.collide(block22);
   block22.visible = true;
   soldier.collide(block23);
   block23.visible = true;
   soldier.collide(block24);
   block24.visible = true;
   soldier.collide(block25);
   block25.visible = true;

   soldier.collide(block26);
   block26.visible = true;
   soldier.collide(block27);
   block27.visible = true;
   soldier.collide(block28);
   block28.visible = true;
   soldier.collide(block29);
   block29.visible = true;

   soldier.collide(spike14);
   spike14.visible = true;
   soldier.collide(spike15);
   spike15.visible = true;
   soldier.collide(spike16);
   spike16.visible = true;
   soldier.collide(spike17);
   spike17.visible = true;
   soldier.collide(spike18);
   spike18.visible = true;

   zombie7.visible = true;
  }

if(gameState === 1 && soldier.x>=100)
{
  block27.velocityY = 5;
  block27.collide(invisibleGround);
}
if(block27.collide(invisibleGround))
{
  block27.velocityY = 0;
}

if(gameState === 1 && soldier.x > -100)
{
  invisibleGround11.visible = true;
  soldier.collide(invisibleGround11); 
}

if(gameState === 1 && soldier.x> windowWidth)
{
  soldier.collide(invisibleGround12);
}
 }
 /* if(gameState === 1 && soldier.x - 50 >windowWidth)
  {
    gameState = 2;
    soldier.x = -100;
    //bg.changeAnimation("bg2", bgImg2);
    
    bg.y= windowHeight/2-240;
    bg.scale = 2.5;
    //invisibleGround.y = 800;
    invisibleGround.shapeColor = "#0C1122";
  }
  if(gameState === 2 && soldier.x - 100 >windowWidth)
  {

    gameState = 3;
    soldier.x = -100;
    bg.changeAnimation("bg", bgImg);
    bg.y= windowHeight/2-100;
    bg.scale = 1.6;
    invisibleGround.y = 730;
    invisibleGround.shapeColor = "#06191D";
    
  }
  if(gameState === 4 && soldier.x - 50 >windowWidth)
  {
    gameState = 5;
    soldier.x = -100;
    bg.changeAnimation("bg2", bgImg2);
    
    bg.y= windowHeight/2-240;
    bg.scale = 2.5;
    //invisibleGround.y = 800;
    invisibleGround.shapeColor = "#0C1122";
  }*/

//}
soldier.collide(invisibleGround);
soldier.collide(wall1);
soldier.collide(wall2);
soldier.collide(wall3);
zombie.collide(wall4);
zombie.bounceOff(wall5);
zombie.bounceOff(spike1);

zombie2.collide(invisibleGround);
zombie2.bounceOff(spike3);
zombie2.bounceOff(invisibleGround2);

zombie3.collide(wall3);
zombie3.bounceOff(wall1);
zombie3.bounceOff(invisibleGround3);

soldier.collide(wall4);
soldier.collide(wall5);
soldier.collide(wall6);
soldier.collide(wall7);
soldier.collide(wall8);
soldier.collide(wall9);
soldier.collide(wall10);
soldier.collide(wall13);
soldier.collide(wall11);
soldier.collide(wall12);
soldier.collide(spike1);
soldier.collide(spike2);
soldier.collide(spike3);
soldier.collide(spike4);
soldier.collide(spike5);
soldier.collide(spike6);
soldier.collide(spike7);
soldier.collide(spike8);
//block13.collide(block9);
block13.bounceOff(block9);
block13.bounceOff(spike9);
//soldier.collide(invisibleGround2);
zombie4.bounceOff(invisibleGround4);
zombie4.bounceOff(invisibleGround5);
//wall9.bounceOff(invisibleGround2);
//wall9.bounceOff(wall6);
spike13.bounceOff(block16);
spike13.bounceOff(block2)

zombie5.bounceOff(invisibleGround7);
zombie6.bounceOff(block26);
zombie5.bounceOff(spike16);
zombie6.bounceOff(spike16);



spike14.bounceOff(block9);
spike14.bounceOff(block23);
spike15.bounceOff(block11);
spike15.bounceOff(block25);



zombie7.bounceOff(invisibleGround9);
zombie7.bounceOff(invisibleGround10);
  drawSprites();

//if(_gameState === rest)
//{
  
if(State === serve)
{


  textSize(24);
  text("This is the story of a soldier who lost in the jungle", windowWidth/2-265, windowHeight/2-160);
  text("and he has to defeat all the zombies that are in his way", windowWidth/2-295, windowHeight/2-120);
  text("and he has to return to his base camp after defeating the", windowWidth/2-303, windowHeight/2-80);
  text("zombies and preventing himself from the obstacles. So are you", windowWidth/2-335, windowHeight/2-40);
  text("ready for some adventure. Press 'W' to jump, 'A' to move left,", windowWidth/2-323, windowHeight/2);
  text("'D' to move right, 'S' to sit down and 'J' to shoot", windowWidth/2-260, windowHeight/2+40);
  text("So, let's start!", windowWidth/2-70, windowHeight/2+80);
  text.shapeColor = "#E1DECB";
  
  if(mousePressedOver(start))
  {
    start.visible = false;
    State = 4;
    menuBar.visible = false;;
  //  _gameState = 4;
  }
}

if(soldier.x>windowWidth+50 && gameState===1)
{
 
  State = 6;
}
if(State === 6)
{
  level1.visible = true;
  textSize(50)
  text("LEVEL 1", windowWidth/2-100, windowHeight/2-20)
  text("COMPLETE", windowWidth/2-145, windowHeight/2 + 60);
  text.shapeColor = "#E1DECB";
  block27.velocityY = 0;
}
//} 
}

function ammo()
{
  bullet = createSprite(soldier.position.x+40, soldier.position.y-20, 10, 5);
  bullet.addAnimation("bullet",bulletImg);
  bullet.addAnimation("bulletFlip",bulletFlipImg);
  bullet.velocityX =+20;
  bullet.scale = 0.15
  ammoGroup.add(bullet);
}

function serve()
{
menuBar.visible = true;
start.visible = true;
}