export class Gun {
  constructor(game) {
    this.game = game;
    this.width = 700;
    this.height = 550;
    this.sx = 0;
    this.x = this.game.width - this.width;
    this.y = this.game.height - this.height;
    this.image = document.getElementById("gun");
  }
  update(input) {
    if (document.fullscreenElement) {
      if (input === 1 && this.sx === 0) {
        const audio = new Audio("./GunSFX.wav");
        audio.currentTime = 0;
        audio.play();
        this.sx += 700;
      } else if (this.sx > 0 && this.sx < 10500) {
        this.sx += 700;
        if (this.sx >= 10500) {
          this.sx = 0;
        }
      }
    }
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.sx,
      0,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}
