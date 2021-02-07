var PLAY=1;
var END=0;
gameState=1; 

var sword,swordImg
var fruitsGroup, fruit1, fruit2, fruit3, fruit4;
function preload(){
  swordImg=loadImage("sword.png")
  fruit1=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  fruit3=loadImage("fruit3.png")
  fruit4=loadImage("fruit4.png")
}


function setup(){
  createCanvas(600,600)
  sword = createSprite(100,100,10,10)
  sword.addImage(swordImg)
  fruitsGroup=new Group()


}

function draw(){
  background("brown")
  //console.log(sword.y)
  sword.y=World.mouseY
  sword.x=World.mouseX
  
  spawnFruits()
  
  
  if (fruitsGroup.isTouching(sword));
  fruitsGroup.destroyEach()
  drawSprites()

}



var rand = Math.round(random(1,4));
  console.log(rand);


if(World.frameCount % 80 == 0)
    if(rand == 1){
      fruit1();
    } else if(rand == 2){
      fruit2();
    } else if(rand==3){
      fruit3();
    } else if(rand==4){
      fruit4()
    