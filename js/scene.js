var sky = document.getElementById('sky');

module.exports = {
  update: function(){

  },
  render: function(ctx, canvas){
    for (var i = 0; i <= canvas.width; i += 10){
      ctx.drawImage(sky, i, 0, 10, window.innerHeight * 0.5 + 100);
    }
    ctx.fillRect(0, window.innerHeight * 0.5 + 100, canvas.width, canvas.height*0.5);
  }
};
