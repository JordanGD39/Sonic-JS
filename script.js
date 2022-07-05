window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 1366;
  canvas.height = 768;
  ctx.imageSmoothingEnabled = false;
  var player = new Player();

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw(ctx);
    requestAnimationFrame(animate);
  }

  animate();
})
