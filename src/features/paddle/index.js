export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 30;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight / 2 - this.height - 10,
    };
  }
  draw = (ctx) => {
    ctx.fillStyle = "#0ff";
    let { x, y } = this.position;
    console.log(x, y);
    ctx.fillRect(x, y, this.width, this.height);
  };
}
