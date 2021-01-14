class Particle{
    constructor(x,y,r) {
       
      var options = {
        
         restitution:0.3,
         friction:0.2
      }
      this.body = Bodies.circle(x,y,r,options);
      World.add(myWorld, this.body);
      this.r=r;
      this.scored=false;
      this.col=color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill(this.col);
        ellipse(pos.x, pos.y, this.r,this.r);
     
     
      
    }
    
  };