import mouse from "./Mouse.js";
import { BackGround } from "./background.js";
import { Gun } from "./gun.js";
import { InputHandler } from "./input.js";
import { Ball } from "./ball.js";
import { Positions } from "./positions.js";

let myVariable;
let timer = 60;
let timerInterval;

function updateTimer() {
  if (timer > 0) {
    timer--;
  } else {
    clearInterval(timerInterval);
  }
}

document.addEventListener("click", function () {
  if (!timerInterval) {
    timerInterval = setInterval(function () {
      updateTimer();
    }, 1000);
  }
});

window.addEventListener("load", function () {
  this.alert(
    "Please zoom out/in for the best experience ( Ctrl + scroll wheel ) "
  );
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;
  mouse.start();

  const positions = new Positions();

  const min = 1;
  const max = 15;

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomNumber1 = getRandomNumber(min, max);
  let randomNumber2;
  do {
    randomNumber2 = getRandomNumber(min, max);
  } while (randomNumber2 === randomNumber1);

  let randomNumber3;
  do {
    randomNumber3 = getRandomNumber(min, max);
  } while (randomNumber3 === randomNumber1 || randomNumber3 === randomNumber2);

  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.score = 0;
      this.gun = new Gun(this);
      this.input = new InputHandler();
      this.background = new BackGround(this);
      this.ball1 = new Ball(this, randomNumber1, positions);
      this.ball2 = new Ball(this, randomNumber2, positions);
      this.ball3 = new Ball(this, randomNumber3, positions);
      this.PastPosition = 0;
      this.timer_image = document.getElementById("score-timer");
    }

    drawScore(context) {
      context.font = "45px Arial";
      context.fillStyle = "White";
      context.fillText(this.score, 660, 75);
    }

    update() {
      this.gun.update(this.input.value);
      this.background.update(mouse.delta.x, mouse.delta.y);
      this.ball1.update(mouse.delta.x, mouse.delta.y);
      this.ball2.update(mouse.delta.x, mouse.delta.y);
      this.ball3.update(mouse.delta.x, mouse.delta.y);
      if (document.fullscreenElement) {
        if (this.input.value === 1) {
          if (this.ball1.IsClickable) {
            this.PastPosition = this.ball1.Position;
            let randomNumber1;
            do {
              randomNumber1 = getRandomNumber(min, max);
            } while (
              randomNumber1 === randomNumber2 ||
              randomNumber1 === randomNumber3 ||
              randomNumber1 === this.PastPosition
            );

            this.score += 100;
            positions.array[`pos1_sx`] = positions.midx - 240;
            positions.array[`pos1_sy`] = positions.midy + 120;
            positions.array[`pos2_sx`] = positions.midx - 120;
            positions.array[`pos2_sy`] = positions.midy + 120;
            positions.array[`pos3_sx`] = positions.midx;
            positions.array[`pos3_sy`] = positions.midy + 120;
            positions.array[`pos4_sx`] = positions.midx + 120;
            positions.array[`pos4_sy`] = positions.midy + 120;
            positions.array[`pos5_sx`] = positions.midx + 240;
            positions.array[`pos5_sy`] = positions.midy + 120;
            positions.array[`pos6_sx`] = positions.midx + 120;
            positions.array[`pos6_sy`] = positions.midy;
            positions.array[`pos7_sx`] = positions.midx - 240;
            positions.array[`pos7_sy`] = positions.midy;
            positions.array[`pos8_sx`] = positions.midx;
            positions.array[`pos8_sy`] = positions.midy;
            positions.array[`pos9_sx`] = positions.midx + 120;
            positions.array[`pos9_sy`] = positions.midy;
            positions.array[`pos10_sx`] = positions.midx + 240;
            positions.array[`pos10_sy`] = positions.midy;
            positions.array[`pos11_sx`] = positions.midx - 240;
            positions.array[`pos11_sy`] = positions.midy - 120;
            positions.array[`pos12_sx`] = positions.midx - 120;
            positions.array[`pos12_sy`] = positions.midy - 120;
            positions.array[`pos13_sx`] = positions.midx;
            positions.array[`pos13_sy`] = positions.midy - 120;
            positions.array[`pos14_sx`] = positions.midx + 120;
            positions.array[`pos14_sy`] = positions.midy - 120;
            positions.array[`pos15_sx`] = positions.midx + 240;
            positions.array[`pos15_sy`] = positions.midy - 120;
            this.ball1 = new Ball(this, randomNumber1, positions);
          }

          if (this.ball2.IsClickable) {
            this.PastPosition = this.ball2.Position;
            let randomNumber2;
            do {
              randomNumber2 = getRandomNumber(min, max);
            } while (
              randomNumber2 === randomNumber1 ||
              randomNumber2 === randomNumber3 ||
              randomNumber2 === this.PastPosition
            );

            this.score += 100;
            positions.array[`pos1_sx`] = positions.midx - 240;
            positions.array[`pos1_sy`] = positions.midy + 120;
            positions.array[`pos2_sx`] = positions.midx - 120;
            positions.array[`pos2_sy`] = positions.midy + 120;
            positions.array[`pos3_sx`] = positions.midx;
            positions.array[`pos3_sy`] = positions.midy + 120;
            positions.array[`pos4_sx`] = positions.midx + 120;
            positions.array[`pos4_sy`] = positions.midy + 120;
            positions.array[`pos5_sx`] = positions.midx + 240;
            positions.array[`pos5_sy`] = positions.midy + 120;
            positions.array[`pos6_sx`] = positions.midx + 120;
            positions.array[`pos6_sy`] = positions.midy;
            positions.array[`pos7_sx`] = positions.midx - 240;
            positions.array[`pos7_sy`] = positions.midy;
            positions.array[`pos8_sx`] = positions.midx;
            positions.array[`pos8_sy`] = positions.midy;
            positions.array[`pos9_sx`] = positions.midx + 120;
            positions.array[`pos9_sy`] = positions.midy;
            positions.array[`pos10_sx`] = positions.midx + 240;
            positions.array[`pos10_sy`] = positions.midy;
            positions.array[`pos11_sx`] = positions.midx - 240;
            positions.array[`pos11_sy`] = positions.midy - 120;
            positions.array[`pos12_sx`] = positions.midx - 120;
            positions.array[`pos12_sy`] = positions.midy - 120;
            positions.array[`pos13_sx`] = positions.midx;
            positions.array[`pos13_sy`] = positions.midy - 120;
            positions.array[`pos14_sx`] = positions.midx + 120;
            positions.array[`pos14_sy`] = positions.midy - 120;
            positions.array[`pos15_sx`] = positions.midx + 240;
            positions.array[`pos15_sy`] = positions.midy - 120;
            this.ball2 = new Ball(this, randomNumber2, positions);
          }

          if (this.ball3.IsClickable) {
            this.PastPosition = this.ball3.Position;
            let randomNumber3;
            do {
              randomNumber3 = getRandomNumber(min, max);
            } while (
              randomNumber3 === randomNumber1 ||
              randomNumber3 === randomNumber2 ||
              randomNumber3 === this.PastPosition
            );

            this.score += 100;

            positions.array[`pos1_sx`] = positions.midx - 240;
            positions.array[`pos1_sy`] = positions.midy + 120;
            positions.array[`pos2_sx`] = positions.midx - 120;
            positions.array[`pos2_sy`] = positions.midy + 120;
            positions.array[`pos3_sx`] = positions.midx;
            positions.array[`pos3_sy`] = positions.midy + 120;
            positions.array[`pos4_sx`] = positions.midx + 120;
            positions.array[`pos4_sy`] = positions.midy + 120;
            positions.array[`pos5_sx`] = positions.midx + 240;
            positions.array[`pos5_sy`] = positions.midy + 120;
            positions.array[`pos6_sx`] = positions.midx + 120;
            positions.array[`pos6_sy`] = positions.midy;
            positions.array[`pos7_sx`] = positions.midx - 240;
            positions.array[`pos7_sy`] = positions.midy;
            positions.array[`pos8_sx`] = positions.midx;
            positions.array[`pos8_sy`] = positions.midy;
            positions.array[`pos9_sx`] = positions.midx + 120;
            positions.array[`pos9_sy`] = positions.midy;
            positions.array[`pos10_sx`] = positions.midx + 240;
            positions.array[`pos10_sy`] = positions.midy;
            positions.array[`pos11_sx`] = positions.midx - 240;
            positions.array[`pos11_sy`] = positions.midy - 120;
            positions.array[`pos12_sx`] = positions.midx - 120;
            positions.array[`pos12_sy`] = positions.midy - 120;
            positions.array[`pos13_sx`] = positions.midx;
            positions.array[`pos13_sy`] = positions.midy - 120;
            positions.array[`pos14_sx`] = positions.midx + 120;
            positions.array[`pos14_sy`] = positions.midy - 120;
            positions.array[`pos15_sx`] = positions.midx + 240;
            positions.array[`pos15_sy`] = positions.midy - 120;

            this.ball3 = new Ball(this, randomNumber3, positions);
          }
        }
      }
    }
    draw(context) {
      this.background.draw(context);
      this.ball1.draw(context);
      this.ball2.draw(context);
      this.ball3.draw(context);
      this.gun.draw(context);
      context.drawImage(this.timer_image, 519, 0);
      this.drawScore(context);
    }
  }

  const game = new Game(canvas.width, canvas.height);
  console.log(game);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update();
    game.draw(ctx);
    requestAnimationFrame(animate);
    ctx.font = "45px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(timer, 936, 75);
    if (timer === 0) {
      clearInterval(timerInterval);

      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      sessionStorage.setItem("score", game.score);
      document.documentElement.style.cursor = "auto";
      window.location.href = "scoreboard.html";
    }
  }
  animate();
});
