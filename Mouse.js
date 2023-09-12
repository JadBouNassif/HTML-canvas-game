class Mouse {
  constructor() {
    this.toggle = this._toggle.bind(this);
    this.move = this._move.bind(this);
    this.delta = { x: 0, y: 0 };
    this.xhair = document.getElementById("crosshair");
  }
  start() {
    document.addEventListener("pointerlockchange", this.toggle);
    document.addEventListener("mozPointerlockchange", this.toggle);
  }
  stop() {
    document.removeEventListener("pointerlockchange", this.toggle);
    document.removeEventListener("mozPointerlockchange", this.toggle);
  }
  _toggle() {
    if (
      document.pointerLockElement === this.xhair ||
      document.mozPointerLockElement === this.xhair
    ) {
      document.addEventListener("mousemove", this.move);
    } else {
      document.removeEventListener("mousemove", this.move);
    }
  }
  _move(e) {
    this.delta.x = e.movementX;
    this.delta.y = e.movementY;
  }
}

const mouse = new Mouse();

export default mouse;
