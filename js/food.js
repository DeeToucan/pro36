class FOOD {
    constructor(x,y){
        food = loadImage("Images/Milk.png");
        this.lastFeed = 0;
        this.foodStock = 0;
        this.x = x;
        this.y = y;

    }

    addFood(amount){
        database.ref('/').update({
            Food:amount
          });
    }

    display(){
        image(food,this.x,this.y,60,60);
    }
}