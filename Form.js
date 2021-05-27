class Form {

  constructor() {
    this.name= createInput("").attribute("placeholder", "name");
    this.age= createInput("").attribute("placeholder", "age");
    this.email= createInput("").attribute("placeholder", "email");
    this.button = createButton('Play');
    this.bg1=createButton("bg1")
    this.leaderBoard=createButton("leaderBoard")


    this.greeting = createElement('h2');
    this.title = createElement('h2');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.name.hide();
    this.age.hide();
    this.email.hide();
    this.title.hide();
  }

  display(){
    this.bg1.mousePressed(){
      this.image = loadImage("sprites/background.jpg")
    }
    this.title.html("new Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.name.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.age.position(displayWidth/2 - 40 , displayHeight/2 - 120);
    this.email.position(displayWidth/2 - 40 , displayHeight/2 - 160);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.bg1.position(displayWidth-50,0)
    
    this.button.mousePressed(()=>{
      this.name.hide();
      this.age.hide();
      this.email.hide();
      this.button.hide();

      var playerIndex = "players/player" + maxId;
      var curDate = new Date();
      database.ref(playerIndex).set({
        name:this.name.value(),
        age:this.age.value(),
        email:this.email.value(),
        date:curDate.getDate() + "/" + curDate.getMonth() + "/" + curDate.getFullYear(),
        score:0
      });
      this.bg1.mousePressed(){
        thisimage = loadImage("sprites/background.jpg")
      }
      console.log(this.name.value()+this.age.value()+this.email.value())
      
      this.greeting.html("Hello " + this.name.value())
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      gameState2 = "play"
    });
    this.leaderBoard.position(width /2,20); 
    this.leaderBoard.mousePressed(()=>{ 
      playersRef.orderByChild("score").limitToLast(2).on("value",(data) => { 
        allPlayers = data.val();
         console.log(allPlayers); 
         if(showLeaderBoard){
            showLeaderBoard = false;
           } else{ 
             showLeaderBoard = true; 
            } 
          }) 
        })
    

  }
  updateScore(finalScore){ 
    var playerIndex = "players/player" + maxId; 
    database.ref(playerIndex).update({ score:finalScore }) 
  }
}

