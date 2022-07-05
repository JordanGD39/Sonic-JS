class Player {
  constructor(game) {
    this.x = 0;
    this.y = 0;
    this.game = game;
    this.renderScale = game.renderScale;
    this.spritesheet = new Image();
    this.spritesheet.src = "Img/Characters/SonicSpritesheet.png";
    let currentFrame = SONIC_SPRITESHEET.frames["0"].frame;
    this.width = currentFrame.w;
    this.height = currentFrame.h;

    this.renderX = canvas.width / 2  - this.width / 2;
    this.renderY = canvas.height / 2 - this.height / 2;
  }

  draw(ctx) {
    let currentFrame = SONIC_SPRITESHEET.frames["0"].frame;

    ctx.drawImage(this.spritesheet, currentFrame.x, currentFrame.y,
      currentFrame.w, currentFrame.h, this.renderX, this.renderY,
      currentFrame.w * this.renderScale, currentFrame.h * this.renderScale);
  }

  drawDebug(ctx) {
      ctx.fillStyle = 'red';
      ctx.fillRect(this.renderX, this.renderY, this.renderScale, this.renderScale);
      ctx.fillStyle = 'pink';
      ctx.fillRect(this.renderX + (this.width / 2 * this.renderScale),
      this.renderY + (this.height / 2 * this.renderScale), this.renderScale, this.renderScale);
  }
}
