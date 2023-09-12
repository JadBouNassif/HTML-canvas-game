export class BackGround {
  constructor(game) {
    this.game = game;
    this.width = this.game.width;
    this.height = this.game.height;
    this.sx = this.game.width/2;
    this.sy = this.game.height/2;
    this.image = document.getElementById("BackGround");
    this.MaxX = this.image.width - this.width;
    this.MaxY = this.image.height - this.height;
  }
  update(deltax, deltay) {
    const sensitivity = 0.2;
    if (deltax > 5 || deltax <-5) {
      this.sx += deltax * sensitivity;
    }
    if (deltay > 5 || deltay <-5) {
      this.sy += deltay * sensitivity;
    }
    this.sx = Math.max(0, Math.min(this.sx, this.MaxX));
    this.sy = Math.max(0, Math.min(this.sy, this.MaxY));
  }
  
  draw(context) {
    context.drawImage(
      this.image,
      this.sx,
      this.sy,
      this.width,
      this.height,
      0,
      0,
      this.width,
      this.height
    );
  }
}
