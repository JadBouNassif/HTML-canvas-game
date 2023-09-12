export class Ball {
  constructor(game, num, positions) {
    this.positions = positions;
    this.Position = num;
    this.IsClickable = false;
    this.game = game;
    this.num = num;
    this.width = 96;
    this.height = 96;
    if (num >= 1 && num <= 15) {
      this.sx = this.positions.array[`pos${num}_sx`];
      this.sy = this.positions.array[`pos${num}_sy`];
    }
    this.image = document.getElementById("Ball_Cyan");
    this.image2 = document.getElementById("Ball_Yellow");
  }
  update(deltax, deltay) {
    const sensitivity = 0.3;
    if (deltax > 5 || deltax < -5) {
      this.sx -= deltax * sensitivity;
      this.positions.midx -= deltax *  0.066;
    }
    if (deltay > 5 || deltay < -5) {
      this.sy -= deltay * sensitivity;
      this.positions.midy -= deltay *  0.066;
    }
  }

  draw(context) {
    if (875 < this.sx && this.sx < 960 && 455 < this.sy && this.sy < 540) {
      this.IsClickable = true;
      context.drawImage(
        this.image2,
        0,
        0,
        this.width,
        this.height,
        this.sx,
        this.sy,
        this.width,
        this.height
      );
    } else {
      this.IsClickable = false;
      context.drawImage(
        this.image,
        0,
        0,
        this.width,
        this.height,
        this.sx,
        this.sy,
        this.width,
        this.height
      );
    }
  }
}