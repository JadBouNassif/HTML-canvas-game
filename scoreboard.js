window.addEventListener("load", function () {
  const ImportedScore = sessionStorage.getItem("score");
  console.log(ImportedScore);
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  const vw = window.innerWidth;

  let x = 0.13 * vw;
  let x2 = 0.3125 * vw;
  let y = 0.02 * vw;
  let space = 0.0364 * vw;

  canvas.width = 0.5 * vw;
  canvas.height = 0.3593 * vw;

  class ScoreBoard {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      if (ImportedScore != null) {
        this.yourScore = ImportedScore;
      } else {
        this.yourScore = 0;
      }
      this.properties = {
        JADISTIC: 999999,
        Fawaz: 0,
        Mansour: 30000,
        Solo: 40000,
        Tido: 10000,
        Bot: 500,
        Melhem: 999999,
        Tenz: 25000,
        Leva: 15000,
      };
    }

    sort() {
        this.properties.You = this.yourScore;
        const propertyEntries = Object.entries(this.properties);
        propertyEntries.sort((a, b) => b[1] - a[1]);
        const sortedProperties = Object.fromEntries(propertyEntries);      
        this.properties = sortedProperties;
      }
      
    draw(context) {
      context.font = "bold 2.7vh Arial";
      context.fillStyle = "White";
      context.strokeStyle = "black";

      for (const [propName, propValue] of Object.entries(this.properties)) {
        if (
          propName !== "width" &&
          propName !== "height"
        ) {
          const text = `${propName}`;
          const text2 = `${propValue}`;
          context.fillText(text2, x2, y);
          context.fillText(text, x, y);
          context.strokeText(text, x, y);
          context.strokeText(text2, x2, y);

          y += space;
        }
      }
    }

    updatecanvas() {
      const vw = window.innerWidth;
      canvas.width = 0.496 * vw;
      canvas.height = 0.3593 * vw;
      x = 0.13 * vw;
      x2 = 0.3125 * vw;
      y = 0.02 * vw;
      space = 0.0364 * vw;
    }
  }

  const scoreboard = new ScoreBoard(canvas.width, canvas.height);
  console.log(scoreboard);
  console.log(canvas);

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    scoreboard.updatecanvas();
    scoreboard.sort();
    scoreboard.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate();
});
