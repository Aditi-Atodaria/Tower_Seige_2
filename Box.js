class Box {
  constructor(x,y){
   var options={
     isStatic:false,
     restitution:0.8,
      friction:1.0,
      density:1.0
   }
   this.body = Bodies.rectangle(x,y,30,40, options);
   this.image = loadImage("box.jpg");
   World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    imageMode(CENTER);
    image(this.image, this.body.position.x,this.body.position.y,30,40);
  }
};
