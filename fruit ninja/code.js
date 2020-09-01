var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f","10a445b9-17d4-408a-9b28-d8d33b943d12","7f894736-d3e5-4f2d-8370-ef6d31f9debf","a3312772-46ad-47b1-bad1-24630db23494","0f9320e8-d6ae-4bdb-8dda-515f44b068ae","ea49efc1-a01c-49c1-88b9-bcbc853346e0","92b53da7-7e1e-43d2-9d13-a04eed9b986d","4e83ec64-1f7c-412a-863f-6910037053c9","3e5d2482-ee82-45cb-a84e-4f454cc17d89","3556b49a-554e-4883-bf77-e6313ec36b5a","2f810e02-2f43-4f44-afb1-0b952225dff3","3265ea80-f770-4ad3-ba3a-25ee2ec2f770","8bbee95f-ab7a-4d44-8d31-a7a1b4bdec09","f9fb2733-ee39-4db0-8485-f87183027355"],"propsByKey":{"ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":49,"y":49},"frameCount":2,"looping":true,"frameDelay":12,"version":"vg2dq_7vFG3SmHsSHg6IyGFAlvsKa.DX","loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":98},"rootRelativePath":"assets/ee2cdfad-a20d-4b4e-8a28-ec16e1f7c45f.png"},"10a445b9-17d4-408a-9b28-d8d33b943d12":{"name":"sword","sourceUrl":null,"frameSize":{"x":100,"y":109},"frameCount":1,"looping":true,"frameDelay":12,"version":"QxoaOxSq67.IjaHinPWetacWn1dKh5n8","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":109},"rootRelativePath":"assets/10a445b9-17d4-408a-9b28-d8d33b943d12.png"},"7f894736-d3e5-4f2d-8370-ef6d31f9debf":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL","loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/jlwUdmDfQ.Fl8uZni7e_c3sVaNJCXBYL/category_gameplay/textGameOver.png"},"a3312772-46ad-47b1-bad1-24630db23494":{"name":"fruitninja","sourceUrl":"assets/v3/animations/ZxV3GPpbk6ps0SXWoeGcyeT1RYIHL5JO18Yn0Mz1FRQ/a3312772-46ad-47b1-bad1-24630db23494.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUIpSncPQlx0SYh7Q.FyahkMx8vDo70S","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/v3/animations/ZxV3GPpbk6ps0SXWoeGcyeT1RYIHL5JO18Yn0Mz1FRQ/a3312772-46ad-47b1-bad1-24630db23494.png"},"0f9320e8-d6ae-4bdb-8dda-515f44b068ae":{"name":"fruit1","sourceUrl":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/0f9320e8-d6ae-4bdb-8dda-515f44b068ae.png","frameSize":{"x":191,"y":191},"frameCount":1,"looping":true,"frameDelay":4,"version":"ARBYC9NhDbZzzHCH3qLCSxxTeQ6XSrue","loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":191},"rootRelativePath":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/0f9320e8-d6ae-4bdb-8dda-515f44b068ae.png"},"ea49efc1-a01c-49c1-88b9-bcbc853346e0":{"name":"fruit2","sourceUrl":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/ea49efc1-a01c-49c1-88b9-bcbc853346e0.png","frameSize":{"x":191,"y":245},"frameCount":1,"looping":true,"frameDelay":4,"version":"VKZqLM.dp7Js432AFxUMfSaKIjk2h1kz","loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":245},"rootRelativePath":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/ea49efc1-a01c-49c1-88b9-bcbc853346e0.png"},"92b53da7-7e1e-43d2-9d13-a04eed9b986d":{"name":"fruit3","sourceUrl":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/92b53da7-7e1e-43d2-9d13-a04eed9b986d.png","frameSize":{"x":191,"y":239},"frameCount":1,"looping":true,"frameDelay":4,"version":"naKVr910RJk0bhdfAxhHNYGkbcGS2xBr","loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":239},"rootRelativePath":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/92b53da7-7e1e-43d2-9d13-a04eed9b986d.png"},"4e83ec64-1f7c-412a-863f-6910037053c9":{"name":"fruit4","sourceUrl":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/4e83ec64-1f7c-412a-863f-6910037053c9.png","frameSize":{"x":191,"y":191},"frameCount":1,"looping":true,"frameDelay":4,"version":"Td21JCzWuGh.38oBHmVMU3aaI22taW0U","loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":191},"rootRelativePath":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/4e83ec64-1f7c-412a-863f-6910037053c9.png"},"3e5d2482-ee82-45cb-a84e-4f454cc17d89":{"name":"fruit5","sourceUrl":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/3e5d2482-ee82-45cb-a84e-4f454cc17d89.png","frameSize":{"x":169,"y":256},"frameCount":1,"looping":true,"frameDelay":4,"version":"KMjIfylYaxc0IIeFOygmHYibYxUH8A6j","loadedFromSource":true,"saved":true,"sourceSize":{"x":169,"y":256},"rootRelativePath":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/3e5d2482-ee82-45cb-a84e-4f454cc17d89.png"},"3556b49a-554e-4883-bf77-e6313ec36b5a":{"name":"fruit6","sourceUrl":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/3556b49a-554e-4883-bf77-e6313ec36b5a.png","frameSize":{"x":191,"y":276},"frameCount":1,"looping":true,"frameDelay":4,"version":"A7B6ZKGRZgO1sESzZlWM_MBNShsaroD5","loadedFromSource":true,"saved":true,"sourceSize":{"x":191,"y":276},"rootRelativePath":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/3556b49a-554e-4883-bf77-e6313ec36b5a.png"},"2f810e02-2f43-4f44-afb1-0b952225dff3":{"name":"enemy2","sourceUrl":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/2f810e02-2f43-4f44-afb1-0b952225dff3.png","frameSize":{"x":90,"y":116},"frameCount":1,"looping":true,"frameDelay":4,"version":"me9J_jhmGAG3LOn4agpqoq69pWaPhXar","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":116},"rootRelativePath":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/2f810e02-2f43-4f44-afb1-0b952225dff3.png"},"3265ea80-f770-4ad3-ba3a-25ee2ec2f770":{"name":"enemy2_copy_1","sourceUrl":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/2f810e02-2f43-4f44-afb1-0b952225dff3.png","frameSize":{"x":90,"y":116},"frameCount":1,"looping":true,"frameDelay":4,"version":"ov8LRd5n.Ct5wiQY25ur.LE_C4bQ77Rc","loadedFromSource":true,"saved":true,"sourceSize":{"x":90,"y":116},"rootRelativePath":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/2f810e02-2f43-4f44-afb1-0b952225dff3.png"},"8bbee95f-ab7a-4d44-8d31-a7a1b4bdec09":{"name":"enemy4","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"BDamiDPOidjPZb_o.CM3G0HR87kIRxLl","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/8bbee95f-ab7a-4d44-8d31-a7a1b4bdec09.png"},"f9fb2733-ee39-4db0-8485-f87183027355":{"name":"enemy3","sourceUrl":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/f9fb2733-ee39-4db0-8485-f87183027355.png","frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"6npweDT4KTOmBB3_2oJMEFg6YOM36a5_","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/v3/animations/-lN_72wT-J2vCS9Cs5Xgvau8DcYMKrOXNDyFb34Pq9E/f9fb2733-ee39-4db0-8485-f87183027355.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Game States
var PLAY = 1;
var END = 0;
var gameState = 1;

// Score variables and Groups
var score = 0;

// Setting a Background
var backdrop = createSprite(200,200,0,0);
backdrop.setAnimation("fruitninja");

//Making a Sword Sprite
var sword = createSprite(375,100,10,70);
sword.setAnimation("sword");

//making fruit and enemy group
var fruitGroup = createGroup();
var enemyGroup = createGroup();

function draw() {
  
//sets the background to white colour  
  background("white");

//call fruits and enemy function
  if(gameState === PLAY){
    fruits();
    Enemy();

    // Move Sword with mouse
    sword.y = World.mouseY;
    sword.x = World.mouseX;

    // Increase score if sword touching fruit
    if (fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score = score+2;
}

// changing the gamestate to end state from start state
    if(enemyGroup.isTouching(sword)){
      gameState = END;
    }
  }
// Declaring End State
  else if(gameState === END) {
 
// makes fruits and enemies invisible
   fruitGroup.setVisibleEach(false);
   enemyGroup.setVisibleEach(false);
// Change the animation of the sword to gameover and reset its position
    sword.setAnimation("textGameOver_1");
    sword.scale = 0.95;
    sword.x = 200;
    sword.y = 200;
}
// enables the drawing of all the sprites used throughout the code
 drawSprites();
//displays the score  
  textSize(20);
  fill("white");
  text ("Fruits Chopped : " + score,125,30);
}
  text ("Fruits Chopped : " + score,125,30);

//function to randomly spawn location for fruits
 function fruits() {
   var position = randomNumber(1,2);

if (World.frameCount%80 === 0) {
// creating a fruit sprite and scaling it
   var  fruit = createSprite(400,200,20,20);
   fruit.scale = 0.3;
// generates randomly different types of fruits and different levels
   var rand = randomNumber(1,6);
   fruit.setAnimation("fruit"+rand);
   fruit.y = randomNumber(50,340);
// setting the velocity of the fruits and gicing them a lifetime to self detonate
   fruit.velocityX = -(8+(score/10));
   fruit.setLifetime = 120;
// adds fruit to fruit group
   

   fruitGroup.add(fruit);
}
}


//function to randomly spawn location for fruits
function Enemy () {
  if(World.frameCount%200 === 0) {
// creating a fruit sprite and scaling it and setting its animation and making it appear randomly at different levels
    var monster = createSprite(400,200,20,20);
    var dom = randomNumber(1,4);
    monster.setAnimation("enemy"+dom);
    monster.y = randomNumber (100,300);
    monster.velocityX = -(8+(score/10));
    monster.setLifetime = 50;
    enemyGroup.add (monster);
 }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
