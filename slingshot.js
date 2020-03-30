class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1= loadImage("sprites/sling1.png");
        this.sling2= loadImage("sprites/sling2.png");
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA=null
    }

    display(){
        image(this.sling1,120,450);
        image(this.sling2,90,450);

        if (this.sling.bodyA){
            push();
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        if (pointA.x<105) {
            strokeWeight(10);
            stroke(48,22,8);
            line(pointA.x-20, pointA.y, pointB.x+10, pointB.y);
            line(pointA.x-20, pointA.y, pointB.x+40, pointB.y);   
        } else {
            strokeWeight(5);
         stroke(48,22,8);
        line(pointA.x+20, pointA.y, pointB.x+10, pointB.y);
        line(pointA.x+20, pointA.y, pointB.x+40, pointB.y);
        }
        
        pop();
        
    }
    }
    
}
