var canvas;
var music;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(720,600);

    //create 4 different surfaces
    surface1 = createSprite(100,580,150,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(270,580,150,20);
    surface2.shapeColor = "green";

    surface3 = createSprite(440,580,150,20);
    surface3.shapeColor = "red";

    surface4 = createSprite(610,580,150,20);
    surface4.shapeColor = "purple";

    ball = createSprite(random(20,700),50,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 4;

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    
    ball.bounceOff(surface1);
    ball.bounceOff(surface2);
    ball.bounceOff(surface3);
    ball.bounceOff(surface4);
    ball.bounceOff(edges);
   
    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        ball.shapeColor = "blue";
    }

    if(surface2.isTouching(ball) && ball.bounceOff(surface2)){
        ball.shapeColor = "green";
    }

    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        ball.shapeColor = "red";
    }

    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        ball.shapeColor = "purple";
    }
    
    drawSprites();
}
