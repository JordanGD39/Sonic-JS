class Chunk {
  constructor(renderX, renderY, src, chunkIndex, game) {
    this.x = 0;
    this.y = 0;
    this.renderX = renderX;
    this.renderY = renderY;
    this.width = game.world.tileWidth;
    this.sourceX = (chunkIndex % game.world.sheetColums) * this.width;
    this.sourceY = Math.floor(chunkIndex / game.world.sheetColums) * this.width;
    this.chunkIndex = chunkIndex;
    this.spritesheet = new Image();
    this.spritesheet.src = src;
    this.game = game;
    this.center = this.width / 2 * this.game.renderScale;
    this.camOldX = 0;
    this.camOldY = 0;

    this.calculateGamePosition();
  }

  calculateGamePosition() {
    let centerX = this.renderX + this.center;
    let centerY = this.renderY + this.center;

    let centerCanvasX = this.game.width / 2;
    let centerCanvasY = this.game.height / 2;

    this.x = centerX - centerCanvasX;
    this.y = centerCanvasY - centerY;
  }

  draw(ctx) {
    if (this.camOldX !== this.game.camera.x || this.camOldY !== this.game.camera.y) {
      let renderVars = this.game.camera.worldToScreen(this.x, this.y, this.width, this.width);
      this.renderX = renderVars[0];
      this.renderY = renderVars[1];
      //console.log(this.renderY);

      this.camOldX = this.game.camera.x;
      this.camOldY = this.game.camera.y;
    }

    if (this.renderX <= -(this.width * this.game.renderScale) || this.renderX >= this.game.width) {
      return 0;
    }
    //ctx.drawImage(this.spritesheet, this.renderX, this.renderY, this.width * this.renderScale);
    ctx.drawImage(this.spritesheet, this.sourceX, this.sourceY,
      this.width, this.width, this.renderX, this.renderY,
      this.width * this.game.renderScale, this.width * this.game.renderScale);
  }

  drawDebug(ctx) {
    ctx.fillStyle = 'purple';
    ctx.fillRect(this.renderX + this.center, this.renderY + this.center, this.game.renderScale, this.game.renderScale);
  }
}
