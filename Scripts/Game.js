class Game {
  constructor(width, height, renderScale) {
    this.width = width;
    this.height = height;
    this.renderScale = renderScale;
    this.player = new Player(this);
    this.world = {

      map: ["000", "000", "000", "000", "000", "000", "000",
            "000", "000", "000", "000", "000", "000", "000",
            "000", "000", "000", "000", "000", "000", "000",
            "000", "000", "000", "000", "000", "000", "000",
            "131", "132", "133", "134", "135", "136", "137",
            "152", "152", "152", "152", "152", "152", "152"
      ],

      colums: 7,
      sheetColums: 13,
      tileWidth: 96,
      yOffset: 840,
      sheetSrc: "Img/Tilesets/nghz1/nghz1Sheet.png"
    }

    this.chunks = [];

    for (var i = 0; i < this.world.map.length; i++) {
      let chunkString = this.world.map[i];

      if (chunkString !== "000") {
        let destinationX = (i % this.world.colums) * (this.world.tileWidth * this.renderScale);
        let destinationY = Math.floor(i / this.world.colums) * (this.world.tileWidth * this.renderScale);

        this.chunks.push(new Chunk(destinationX, destinationY - this.world.yOffset, this.world.sheetSrc, parseInt(chunkString), this.world.sheetColums, this.world.tileWidth, this.renderScale));
      }
    }

    console.log(this.chunks);
  }

  update() {

  }

  draw(ctx) {

    for (var i = 0; i < this.chunks.length; i++) {
      let chunk = this.chunks[i];
      chunk.draw(ctx);
    }

    this.player.draw(ctx);
    this.player.drawDebug(ctx);
  }
}
