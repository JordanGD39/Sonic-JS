class Player {
  constructor(game) {
    //Logic
    this.x = 0;
    this.y = 0;
    this.grounded = false;

    //Render
    this.renderScale = game.renderScale;
    this.spritesheet = new Image();
    this.spritesheet.src = "Img/Characters/SonicSpritesheet.png";
    let currentFrame = SONIC_SPRITESHEET.frames["0"].frame;
    this.width = currentFrame.w;
    this.height = currentFrame.h;
    this.renderX = canvas.width / 2  - this.width / 2;
    this.renderY = canvas.height / 2 - this.height / 2;

    //misc
    this.game = game;
  }

  update(input) {
    if (input.includes('ArrowRight')) {
      this.x++;
    }
    else if (input.includes('ArrowLeft')) {
      this.x--;
    }

    if (input.includes('ArrowUp')) {
      this.y++;
    }
    else if (input.includes('ArrowDown')) {
      this.y--;
    }
  }

  draw(ctx) {
    let renderVars = this.game.camera.worldToScreen(this.x, this.y, this.width, this.height);
    this.renderX = renderVars[0];
    this.renderY = renderVars[1];

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
