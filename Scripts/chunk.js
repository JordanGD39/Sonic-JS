class Chunk {
  constructor(renderX, renderY, src, chunkIndex, tileSheetColums, tileWidth, renderScale) {
    this.x = 0;
    this.y = 0;
    this.renderX = renderX;
    this.renderY = renderY;
    this.width = tileWidth;
    this.sourceX = (chunkIndex % tileSheetColums) * tileWidth;
    this.sourceY = Math.floor(chunkIndex / tileSheetColums) * tileWidth;
    this.chunkIndex = chunkIndex;
    this.spritesheet = new Image();
    this.spritesheet.src = src;
    this.renderScale = renderScale;
  }

  draw(ctx) {
    //ctx.drawImage(this.spritesheet, this.renderX, this.renderY, this.width * this.renderScale);
    ctx.drawImage(this.spritesheet, this.sourceX, this.sourceY,
      this.width, this.width, this.renderX, this.renderY,
      this.width * this.renderScale, this.width * this.renderScale);
  }
}
