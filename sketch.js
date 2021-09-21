var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;
foodS = 10;
var addFoodButton, feedButton;
var feedTime, lastFeed;
var foodObj;

var food;
var Food;

function preload(){
   dogImg=loadImage("Images/Dog.png");
   dogImg1=loadImage("Images/happy dog.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(500,500);

  Food = new FOOD(300,300);
  database=firebase.database();

  addFoodButton = createButton('Add Food');
  addFoodButton.position(460, 100);
  feedButton = createButton('Feed Dog');
  feedButton.position(700, 100);

  addFoodButton.mousePressed(writeStock(foodS));



  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 
}

// function to display UI
function draw() {
  background(46,139,87);
 
  // if(keyWentDown(UP_ARROW)){
 
  // }

  addFoodButton.mousePressed(()=>{
    foodS++;
  });
  

  feedButton.mousePressed(()=>{
    foodS--;
    dog.addImage(dogImg1);
  });

  drawSprites();
  Food.display();
  Food.addFood(foodS);
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP ARROW Key To Feed Duncan II Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}