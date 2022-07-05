class Chunk {
  constructor(x, y, src, chunkIndex) {
    this.x = x;
    this.y = y;
    this.chunkIndex = chunkIndex;
    this.spritesheet = new Image();
    this.spritesheet.src = src;
  }
}
