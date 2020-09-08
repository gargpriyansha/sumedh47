class Platform{
    constructor(x,y,blockWidth){
        this.x = x;
        this.y = y;
        //plat is the main plank. the second one is the colored border
        this.blockWidth = blockWidth;
        this.plat2 = createSprite(this.x,this.y,50*this.blockWidth+5,55);
        this.plat2.shapeColor = "blue";
        this.plat = createSprite(this.x,this.y,50*this.blockWidth,50);
        //this.plat.shapeColor = "blue";
        
        this.score = true;
        //platforms.push(this.plat)
    }
    setObjective(){
        //u got on the platform
        this.plat.shapeColor = "yellow";
    }
    reset(x,y,blockWidth){
        this.plat.x = x;
        this.plat2.x = x;
        this.plat.y = y;
        this.plat2.y = y;
        this.plat.width = blockWidth*50;
        this.plat.width = blockWidth*50 + 5;
    }
    
}