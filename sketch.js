var PLAY = 1;
var END = 2;
var LEVEL1 = 3;
var LEVEL2 = 4;
var LEVEL3 = 5;
var LEVEL4 = 6;
var LEVEL5 = 7;
var LEVEL6 = 8
var gameState = PLAY;

var play, playImg, edges, bg;
var bg1, ironMan, ironManImg, corvus, corvusImg;
var b, bulletImg, bulletGroup, b2, b2Img, b2Group;
var bg2, capitanA, cA, Ebony, EbonyImg;
var a, arrowImg, arrowGroup, d, dartImg, dartGroup;
var bg3, thor, thorImg, loki, lokiImg;
var blueL, blueImg, blueGroup, redL, redImg, redGroup; 
var bg4, hulk, hulkImg, cull, cullImg;
var hulkFist, hulkFistImg, hulkFistGroup, cullFist, cullFistImg, cullFistGroup;
var bg5;

function preload(){

    playImg = loadImage("Play.png");
    bg1 = loadImage("Titan.jpg");
    ironManImg = loadImage("Iron Man.png");
    corvusImg = loadImage("Corvus Glaive.png");
    bulletImg = loadImage("bullet.png");
    b2Img = loadImage("bullet2.png");
    bg2 = loadImage("Nidavellir.jpg");
    cA = loadImage("Capitan America.png");
    EbonyImg = loadImage("Ebony Maw.png");
    arrowImg = loadImage("Captain America Arrow.png");
    dartImg = loadImage("Ebony Maw Dart.png");
    bg3 = loadImage("Knowhere.png");
    thorImg = loadImage("Thor.png");
    lokiImg = loadImage("Loki.png");
    blueImg = loadImage("Thor Lightening.png");
    redImg = loadImage("Loki Lightening.png");
    bg4 = loadImage("Vormir.jpg");
    hulkImg = loadImage("Hulk.png");
    cullImg = loadImage("Cull Obsidian.png");
    hulkFistImg = loadImage("Hulk Punch.png");
    cullFistImg = loadImage("Cull Punch.png");
    bg5 = loadImage("Earth.jpg");

}

function setup(){
    createCanvas(1000,500);

    play = createSprite(500,400);
    play.addImage(playImg);
    play.scale = 0.7;
    play.debug = true;

    bg = createSprite(500,250);
    bg.addImage(bg1);
    bg.scale = 7;
    bg.velocityX = -3;
    bg.visible = false;

    ironMan = createSprite(870,250);
    ironMan.addImage(ironManImg);
    ironMan.scale = 1;
    ironMan.visible = false;

    corvus = createSprite(100,250);
    corvus.addImage(corvusImg);
    corvus.velocityY = -5;
    corvus.scale = 1.2;
    corvus.visible = false;

    bulletGroup = new Group();
    b2Group = new Group();

    capitanA = createSprite(170,250);
    capitanA.addImage(cA);
    capitanA.scale = 1;
    capitanA.visible = false;

    Ebony = createSprite(870,250);
    Ebony.addImage(EbonyImg);
    Ebony.velocityY = -5;
    Ebony.scale = 1;
    Ebony.visible = false;

    arrowGroup = new Group();
    dartGroup = new Group();

    thor = createSprite(865,250);
    thor.addImage(thorImg);
    thor.scale = 1.1;
    thor.visible = false;

    loki = createSprite(125,250);
    loki.addImage(lokiImg);
    loki.velocityY = -5;
    loki.scale = 1.1;
    loki.visible = false;

    blueGroup = new Group();
    redGroup = new Group();

    hulk = createSprite(856,250);
    hulk.addImage(hulkImg);
    hulk.scale = 1.1;
    hulk.visible = false;

    cull = createSprite(125,250);
    cull.addImage(cullImg);
    cull.velocityY = -5;
    cull.scale = 1.2;
    cull.visible = false;

    hulkFistGroup = new Group();
    cullFistGroup = new Group();

}

function draw() {
    background("beige");

    edges = createEdgeSprites();

    drawSprites();

    if(gameState === PLAY){

        fill(0,0,0);
        textSize(45);
        textStyle("bold");
        text("Avengers Run",350,50);
        text("_______________",310,50);

        fill(0,0,193);
        textSize(25);
        text("The year is 2030 and Thanos has taken over the Earth.",190,100);
        text("Now the time has come for the Earth's greatest warriors",140,150);
        text("before he destroys Earth and all mankind.",265,200);
        text("a few of the members from Thanos' team.",265,250);
        text("on the Avengers Symbol below to start. All the Best.",210,300);

        fill(178,34,34);
        text("The Avengers had been forced to go into hiding for the last 10 years.",110,125);
        text("to rise again and defeat Thanos once and for all",230,175);
        text("But first we must help all the Avengers defeat", 230,225);
        text("Are you up for the challenge? if you are click",260,275);

        if (mousePressedOver(play)) {
            gameState = LEVEL6;
            play.destroy();
        }
        
    }else if (gameState === LEVEL1) {

        bg.visible = true;
        ironMan.visible = true;
        corvus.visible = true;

        corvus.bounceOff(edges);
        
        if (bg.x < 0){
            bg.x = bg.width/2;
        }
    
        if (keyDown("Up")) {
            ironMan.y = ironMan.y -7;
        }
        
        if (keyDown("Down")) {
            ironMan.y = ironMan.y +7;
        }
        
        if(keyDown("Space")){
            bullet();
        }

        if (bulletGroup.isTouching(corvus)) {
            corvus.scale = corvus.scale -0.1;
            bulletGroup.destroyEach();
        }

        if(b2Group.isTouching(ironMan)){
            ironMan.scale = ironMan.scale -0.1;
            b2Group.destroyEach();
        }

        if(ironMan.scale <= 0.5){
            ironMan.destroy();
            corvus.destroy();
            bulletGroup.destroyEach();
            b2Group.destroyEach();
            bg.velocityX = 0;
            gameState = END;
        }

        if(corvus.scale <= 0.5){
            ironMan.destroy();
            corvus.destroy();
            bulletGroup.destroyEach();
            b2Group.destroyEach();
            gameState = LEVEL2;
        }
        
        staff();

    }else if (gameState === END) {
        fill(0,0,0);
        textSize(50);
        textStyle("bold");
        text("Game Over",351,250);

    }else if (gameState === LEVEL2) {
        bg.visible = true;
        capitanA.visible = true;
        Ebony.visible = true;

        Ebony.bounceOff(edges);

        bg.addImage(bg2);

        if (bg.x < 1000){
            bg.x = bg.width/2;
        }

        if (keyDown("Up")) {
            capitanA.y = capitanA.y -7;
        }
        
        if (keyDown("Down")) {
            capitanA.y = capitanA.y +7;
        }

        if(keyDown("Space")){
            arrow();
        }

        if (arrowGroup.isTouching(Ebony)) {
            Ebony.scale = Ebony.scale -0.1;
            arrowGroup.destroyEach();
        }

        if(dartGroup.isTouching(capitanA)){
            capitanA.scale = capitanA.scale -0.1;
            dartGroup.destroyEach();
        }

        if(capitanA.scale <= 0.5){
            capitanA.destroy();
            Ebony.destroy();
            dartGroup.destroyEach();
            arrowGroup.destroyEach();
            bg2.velocityX = 0;
            gameState = END;
        }

        if(Ebony.scale <= 0.5){
            capitanA.destroy();
            Ebony.destroy();
            arrowGroup.destroyEach();
            dartGroup.destroyEach();
            gameState = LEVEL3;
        }
        
        dart();

    }else if (gameState === LEVEL3) {
           
        bg.visible = true;
        thor.visible = true;
        loki.visible = true;

        loki.bounceOff(edges);

        bg.addImage(bg3);

        if (bg.x < 1170){
            bg.x = bg.width/2;
        }

        if (keyDown("Up")) {
            thor.y = thor.y -7;
        }
        
        if (keyDown("Down")) {
            thor.y = thor.y +7;
        }

        if(keyDown("Space")){
            blueLightening();
        }

        if (blueGroup.isTouching(loki)) {
            loki.scale = loki.scale -0.1;
            blueGroup.destroyEach();
        }

        if(redGroup.isTouching(thor)){
            thor.scale = thor.scale -0.1;
            redGroup.destroyEach();
        }

        if(thor.scale <= 0.5){
            thor.destroy();
            loki.destroy();
            blueGroup.destroyEach();
            redGroup.destroyEach();
            bg3.velocityX = 0;
            gameState = END;
        }

        if(loki.scale <= 0.5){
            thor.destroy();
            loki.destroy();
            redGroup.destroyEach();
            blueGroup.destroyEach();
            gameState = LEVEL4;
        }

        redLightening();

    }else if (gameState === LEVEL4) {

        bg.visible = true;
        hulk.visible = true;
        cull.visible = true;

        cull.bounceOff(edges);

        bg.addImage(bg4);

        if (bg.x < 1000){
            bg.x = bg.width/2;
        }

        if (keyDown("Up")) {
            hulk.y = hulk.y -7;
        }
        
        if (keyDown("Down")) {
            hulk.y = hulk.y +7;
        }

        if(keyDown("Space")){
            hulkPunch();
        }

        if (hulkFistGroup.isTouching(cull)) {
            cull.scale = cull.scale -0.1;
            hulkFistGroup.destroyEach();
        }

        if(cullFistGroup.isTouching(hulk)){
            hulk.scale = hulk.scale -0.1;
            cullFistGroup.destroyEach();
        }

        if(hulk.scale <= 0.5){
            hulk.destroy();
            cull.destroy();
            hulkFistGroup.destroyEach();
            cullFistGroup.destroyEach();
            bg4.velocityX = 0;
            gameState = END;
        }

        if(cull.scale <= 0.5){
            hulk.destroy();
            cull.destroy();
            hulkFistGroup.destroyEach();
            cullFistGroup.destroyEach();
            gameState = LEVEL5;
        }

        cullPunch();

    }else if (gameState === LEVEL5) {
        bg.visible = true;
        ironMan.visible = true;
        capitanA.visible = true;
        thor.visible = true;
        hulk.visible = true;


        ironMan.y = 250;
        ironMan.debug = true;
        ironMan.setCollider("circle",0,0,60);

        capitanA.x = 130;
        capitanA.scale = 0.9;
        capitanA.debug = true;

        thor.x = 400;
        thor.y = 390;
        thor.scale = 0.9;
        thor.mirrorX(-1);
        thor.debug = true;
        thor.setCollider("circle",0,0,60);

        hulk.x = 700;
        hulk.y = 120;
        hulk.scale = 0.9;
        hulk.debug = true;
        hulk.setCollider("circle",0,0,60);

        bg.addImage(bg5);

        if (bg.x < 1000){
            bg.x = bg.width/2;
        }

        if (keyDown("w")) {
            ironMan.velocityY = -7;
        }
        
        if (keyDown("s")) {
            ironMan.velocityY = +7;
        }

    }else if (gameState === LEVEL6) {
        ironMan.visible = true;
        capitanA.visible = true;
        thor.visible = true;

        thor.x = 500;
        thor.y = 250;
        thor.scale = 0.5;
        thor.mirrorX(-1);

        ironMan.scale = 0.5;
        capitanA.scale = 0.5;

        if (keyDown("up")) {
            ironMan.velocityY = -7;
        }
        
        if (keyDown("down")) {
            ironMan.velocityY = +7;
        }

        if (keyDown("left")) {
            thor.velocityX = -7;
        }
        
        if (keyDown("right")) {
            thor.velocityX = +7;
        }
        
    }
}

function bullet(){

    b = createSprite(830,180,5,5);
    b.velocityX = -12;
    b.y = ironMan.y -65;
    b.depth = corvus.depth;
    bulletGroup.add(b);
    b.addImage(bulletImg);
    b.scale = 0.1;
    return b;

}

function staff(){

    if (frameCount %100 === 0) {

        b2 = createSprite(50,45,15,15);
        b2.addImage(b2Img);
        b2.scale = 0.1;
        b2.velocityX = 9;
        b2.y = corvus.y -85;
        b2Group.add(b2);
    }
}

function arrow(){
    a = createSprite(250,45,15,15);
    a.addImage(arrowImg);
    a.scale = 0.3;
    a.velocityX = 12;
    a.y = capitanA.y -85;
    a.depth = Ebony.depth;
    arrowGroup.add(a);
    return a;
}

function dart(){

    if (frameCount %100 === 0) {

        d = createSprite(900,400,15,15);
        d.addImage(dartImg);
        d.scale = 0.1;
        d.velocityX = -9;
        d.y = Ebony.y -120;
        dartGroup.add(d);
    }
}

function blueLightening(){
    blueL = createSprite(830,145,15,15);
    blueL.addImage(blueImg);
    blueL.scale = 0.3;
    blueL.velocityX = -12;
    blueL.y = thor.y -85;
    blueL.depth = loki.depth;
    blueGroup.add(blueL);
    return blueL;
}

function redLightening(){

    if (frameCount %100 === 0) {

        redL = createSprite(100,145,15,15);
        redL.addImage(redImg);
        redL.scale = 0.1;
        redL.velocityX = 9;
        redL.y = loki.y -120;
        redGroup.add(redL);
    }
}

function hulkPunch(){
    hulkFist = createSprite(940,140,15,15);
    hulkFist.addImage(hulkFistImg);
    hulkFist.scale = 0.1;
    hulkFist.velocityX = -12;
    hulkFist.y = hulk.y -115;
    hulkFist.depth = cull.depth;
    hulkFistGroup.add(hulkFist);
    return hulkFist;
}

function cullPunch(){
    if (frameCount %100 === 0) {

        cullFist = createSprite(200,217,15,15);
        cullFist.addImage(cullFistImg);
        cullFist.scale = 0.4;
        cullFist.velocityX = 9;
        //cullFist.y = cull.y -120;
        cullFistGroup.add(cullFist);
    } 
}