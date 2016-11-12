var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.8;

var player = require('./player.js');
var scene = require('./scene.js');

function gameLoop(){
  ctx.clearRect(0,0,canvas.width, canvas.height);
  //update de todo
  player.update();
  //render de todo
  scene.render(ctx, canvas);
  player.render(ctx);
  window.requestAnimationFrame(gameLoop);
}

gameLoop();
