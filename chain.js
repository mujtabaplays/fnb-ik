class Chain{
constructor(bodyA,bodyB){
  //properties
  var options={
    bodyA:bodyA,
    bodyB:bodyB,
    length:10,
    stiffness:0.04
}

  this.chain=Constraint.create(options);
  World.add(world,this.chain); 
  

}


display(){

    //help you see the objects you make on the canvas
    var posA=this.chain.bodyA.position;
    var posB=this.chain.bodyB.position;

    push();
    strokeWeight(5)
    line(posA.x,posA.y,posB.x,posB.y); 
    pop();  
}


}