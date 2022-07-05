class Player {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.spritesheet = new Image();
    this.spritesheet.src = "Img/Characters/SonicSpritesheet.png";
    this.renderX = canvas.width / 2;
    this.renderY = canvas.height / 2;
  }

  draw(ctx) {
    var currentFrame = SONIC_SPRITESHEET.frames["0"].frame;

    ctx.drawImage(this.spritesheet, currentFrame.x, currentFrame.y,
      currentFrame.w, currentFrame.h, this.renderX, this.renderY,
      currentFrame.w * 3, currentFrame.h * 3);
  }
}
