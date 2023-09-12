export class Positions {
  constructor() {
    this.array = {};

    this.midx = 918;
    this.midy = 498;

    const X = [678, 798, 918, 1038, 1158];
    const Y = [378, 498, 618,];

    for (let yIndex = 0; yIndex < Y.length; yIndex++) {
      for (let xIndex = 0; xIndex < X.length; xIndex++) {
        const posNumber = yIndex * X.length + xIndex + 1;
        this.array[`pos${posNumber}_sx`] = X[xIndex];
        this.array[`pos${posNumber}_sy`] = Y[yIndex];
      }
    }
  }
}