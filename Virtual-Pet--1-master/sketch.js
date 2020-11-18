var dog, happyDog, database, foodS, foodStock;

function preload()
{
  dogImage = loadImage ("Dog.png");
  happyDogImage = loadImage ("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,400,50,50);
  dog.addImage (dogImage);
  dog.scale = 0.1;

  database = firebase.database();
var  foodStock = database.ref ('Food');
foodStock.on ("value",readStock);
}


function draw() {  
  background(46, 139, 87);
 if(keyDown(UP_ARROW)){
    writeStock(foodS-1);
    dog.addImage(happyDogImage);
    dog.scale = 0.1;
}

stroke("red");
textSize(24);
text(foodS,100,200);

  drawSprites();

}


function readStock(data){
foodS = data.val();

}


function writeStock(x){
database.ref("/").update({
  Food:x
})


}


