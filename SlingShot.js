class SlingShot{
    constructor(pointA, pointB){
        var options = {
           pointA: pointA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }

 fly(){
     this.slingshot.A=null;
 }

    display(){
       if (this.slingshot.bodyA) {
        var pointA = this.slingshot.pointA.positionnm  ;
        var pointB = this.pointB;
        strokeWeight(20);
        stroke(0)
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}