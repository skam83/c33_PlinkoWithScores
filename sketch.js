const Engine = Matter.Engine;
const World = Matter.World;

const Bodies = Matter.Bodies;
 
var particles=[];
var plinkos=[];
var divisions=[];
var ground;
var myEngine,myWorld;
var divheight=300;
var particle,count=0,score=0;
var gameState = "play";

function setup() {
  createCanvas(800,800);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

 // particle= new Particle(200,200,10);

  ground = new Block(width/2,height-10,width,20);

  for(var i=0;i<=width;i+=80){
    divisions.push(new Block(i,height-divheight/2,10,divheight));

  }
  var i=50;
  for(var k=100;k<500;k+=100){
    
    for(var j=i;j<width;j+=50){
   
      plinkos.push(new Plinko(j,k,10));
    }
    if(i===50){
      i=25;
    }else{i=50;}
  }

  


  Engine.run(myEngine);

}

function draw() {
  background(0,0,0); 

  fill ("Pink");
  textSize(25);
  text("SCORE: "+score,50,50);
  text("500",20,525);
  text("500",100,525);
  text("500",180,525);
  text("200",260,525);
  text("200",340,525);
  text("300",420,525);
  text("300",500,525);
  text("100",580,525);
  text("100",660,525);
  text("100",740,525);

  ground.display();

 /* if(frameCount%80===0){
    particles.push(new Particle(random(200,600),50,10));
  }

  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }*/

  for(var i=0;i<divisions.length;i++){
    divisions[i].display();
  }

  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
 
  if(particle != null){
    particle.display();
  
  
  if(gameState === "play" && count <=5)
  {
    if(particle.body.position.y>500)
    {
      if(particle.body.position.x >0 && particle.body.position.x<240 && particle.scored !=true){
        score=score+500;
        particle.scored = true;
      }
      else if(particle.body.position.x >240 && particle.body.position.x <400 && particle.scored !=true){
        score=score+200;
        particle.scored = true;
      }
      else if(particle.body.position.x >400 && particle.body.position.x <560 && particle.scored !=true){
        score=score+300;
        particle.scored = true;
      }
      else if(particle.body.position.x >560 && particle.body.position.x <800 && particle.scored !=true){
        score=score+100;
        particle.scored = true;
      }
      if(count===5){
        gameState = "end";
      }
    }
   
   }
  }
   
  if(gameState === "end"){
    textSize(25);
    stroke ("pink");
    fill ("blue");
    text("GAME OVER",250,250);
  }
    
  

}
function mousePressed(){
  if(gameState != "end"){
    console.log("hi");
    particle =new Particle(mouseX,50,10);
    count++;
  }
}