class Shuriken{
    constructor(){
        //creates a shuriken
        this.ken = createSprite(player.x,player.y,20,20);
        this.x = (camera.position.x - 800) + mouseX;
        this.y = mouseY;
        //speed of shuriken
        this.mover = 0.01 //1 
        this.playerX = player.x;
        this.playerY = player.y;
        this.ken.addImage(shurikenz);
        kobe.amp(0.2);
        kobe.play();
    }
    display(){
        //goes towards the mouse
        this.ken.x = ((this.playerX + ((this.x - this.playerX)*this.mover)));
        this.ken.y = (this.playerY + ((this.y - this.playerY)*this.mover))
        this.mover += 0.01    
         
       
    }
}