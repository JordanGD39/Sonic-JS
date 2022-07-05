window.addEventListener('load', function() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const renderScale = 3;
  canvas.width = 1366;
  canvas.height = 768;
  ctx.imageSmoothingEnabled = false;
  let game = new Game(canvas.width, canvas.height, renderScale);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.draw(ctx);
    requestAnimationFrame(animate);
  }

  animate();
})
