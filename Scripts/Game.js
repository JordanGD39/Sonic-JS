class Game {
  constructor(width, height, renderScale) {
    this.width = width;
    this.height = height;
    this.renderScale = renderScale;
    this.player = new Player(this);
  }

  update() {

  }

  draw(ctx) {
    this.player.draw(ctx);
    this.player.drawDebug(ctx);
  }
}
