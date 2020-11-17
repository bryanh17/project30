class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visibility = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if (this.body.speed<3){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("aquamarine");
        rect(0,0,this.width, this.height);
        pop();
        }
        else{
          push();
          this.Visibility = this.Visibility-1;
          World.remove(world,this.body);
          tint(255,this.Visibility);
          //rect(pos.x,pos.y,this.width,this.height);
          pop();
        }
      }
}