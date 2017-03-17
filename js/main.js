var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;
var GAME_STATE = "running";

var detectCollisions = require('./detectCollisions');                               //////////////////
var player = require('./player.js');
var scene = require('./scene.js');
var Box = require('../Box.js');                                                    /////////////////////
var boxes = [];                                                                  /////////////////////for repeat image

setInterval(function(){                                                           ///////////////repet image para saltarla
boxes.push(new Box(100, 100, 15, window.innerWidth, canvas.height -180));         //////////////
},1000);                                                                         ///////////////////

function gameLoop(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  //update de todo
  player.update();
  boxes.forEach(function(box){                                                    //////////////////////////repet image
    box.update();
    var thereWasACollisions = detectCollisions(player, box)                       ///////para collisions para choque y pierde
    if (thereWasACollisions){                                                      //////
      GAME_STATE = "dead";                                                         //////
    }
  });
  //render de todo
  scene.render(ctx, canvas);
  player.render(ctx);

  boxes.forEach(function(box){                                                  /////////////////////// repeat image
    box.render(ctx);
  });
  if(GAME_STATE === "running"){                                                   //////////// collisions para que choque
window.requestAnimationFrame(gameLoop);
  }
  else {                                                                           ///al dar click 
    drawGameOver(ctx, canvas);
  }

}

gameLoop();

function drawGameOver(ctx, canvas){                                           //////////////// ubdate al dar click
  ctx.font="30px Verdana";
  ctx.textAlign="center";
  ctx.fillText("Game Over!!",canvas.width/2 , canvas.height/2);
  document.getElementById('canvas').onclick=function(){
    location.reload();
  }
}
