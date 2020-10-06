class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.Sling1 = loadImage("sprites/sling1.png")
        this.Sling2 = loadImage("sprites/sling2.png")
        this.Sling3 = loadImage("sprites/sling3.png")
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.Sling1,180,23);
        image(this.Sling2,155,23);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(107,33,33);
            if(pointA.x<200){
                line(pointA.x+20, pointA.y, pointB.x+17, pointB.y);
                line(pointA.x-25, pointA.y, pointB.x-20, pointB.y);
                image(this.Sling3,pointA.x-30,pointA.y-10,15,20)
            }
            else {
            line(pointA.x+20, pointA.y, pointB.x+17, pointB.y);
            line(pointA.x-25, pointA.y, pointB.x-20, pointB.y);
            image(this.Sling3,pointA.x+22,pointA.y-10,15,20)
            }
        }
    }
    
}