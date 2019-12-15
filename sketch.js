var joke, joke_img;
var bat, bat_img;

function preload() {
  bat_img = loadImage("./img/bg.jpg");

  joke_img = loadImage("./img/joker.jpg");
}

function setup() {
  createCanvas(400, 400);
  
  bat = createSprite(200, 200, 400, 400);
  bat.addImage(bat_img);

  joke = createSprite(200, 200, 60, 40);
  joke.addImage(joke_img);
}

function draw() {
  background(bat_img);

  drawSprites();
}