class Score {
    constructor() {
        this.score = 0;
        this.x = 10;
        this.y = 30;
        this.font = '24px Arial';
        this.textColor = 'black';
    }

    updateScore(newScore) {
        this.score = newScore;
        this.drawScore();
    }

    drawScore() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = this.font;
        this.ctx.fillStyle = this.textColor;
        this.ctx.fillText(this.score, this.x, this.y);
    }
}

// Usage:
const scoreDisplay = new ScoreDisplay('scoreCanvas');

// Example: Update the score and display it
scoreDisplay.updateScore(10);
