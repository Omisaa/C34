var ball,database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
     ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition = database.ref('ball/Position')
    ballposition.on("value",readOp);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readOp(){
    position= date.val();
    ball.x=Position.x
    ball.y=Position.y
}
