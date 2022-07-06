class Camera {
  constructor(x, y, game) {
    this.x = x;
    this.y = y;
    this.borderX = 16;
    this.borderY = 64;
    this.game = game;
  }

  follow(target) {
    if (target.x > this.x + this.borderX) {
      this.x = target.x - this.borderX;
    }
    else if (target.x < this.x - this.borderX) {
      this.x = target.x + this.borderX;
    }

    if (target.grounded) {
      this.y = target.y;
    }
    else {
      if (target.y > this.y + this.borderY) {
        this.y = target.y - this.borderY;
      }
      else if (target.y < this.y - this.borderY) {
        this.y = target.y + this.borderY;
      }
    }    
  }

  worldToScreen(x, y, width, height) {
    let cornerX = x - width / 2 * this.game.renderScale;
    let scaledHeight = height / 2 * this.game.renderScale;

    let camCornerX = this.x - this.game.width / 2;
    let camCornerY = this.game.halfedHeight + this.y;

    return [cornerX - camCornerX, camCornerY - y - scaledHeight];
  }

  drawDebug(ctx) {
    ctx.lineWidth = 2 * this.game.renderScale;
    ctx.strokeStyle = 'green';
    ctx.beginPath();
    ctx.moveTo(this.game.halfedWidth - this.borderX, this.game.halfedHeight);
    ctx.lineTo(this.game.halfedWidth + this.borderX, this.game.halfedHeight);
    ctx.stroke();
    ctx.strokeStyle = 'white';

    ctx.lineWidth = this.game.renderScale;
    ctx.beginPath();
    ctx.rect(this.game.halfedWidth - this.borderX, this.game.halfedHeight - this.borderY, this.borderX * 2, this.borderY * 2);
    ctx.stroke();
  }
}
