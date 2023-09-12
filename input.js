export class InputHandler {
  constructor() {
    this.value = 0;

    window.addEventListener('mousedown', () => {
      this.value = 1;
      setTimeout(() => {
        this.value = 0;
      }, 30);
    });
    window.addEventListener('mouseup', () => {
      this.value=0;
    });
  }
}
