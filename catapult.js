class Catapult extends BaseClass {
    constructor(x, y, width, height,img){ //added img
        /*var options = {
            isStatic: false
        }*/
      super(x,y,width,height);
      Matter.Body.setStatic(this.body, true);
      this.image = loadImage(img);
     this.image = loadImage("sprites/cannon.png");
    }
   // deleted the rest of the code
  }
  