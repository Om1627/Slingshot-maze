class Particle {
    constructor(x,y,r) {
      var options={
        restitution:1.0,
        density:1.0
        
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r; 
      
      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      ellipseMode(CENTER);
      fill("yellow");
     
    ellipse(pos.x,pos.y, this.r);
    }
  };