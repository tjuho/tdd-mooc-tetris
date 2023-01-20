export class MyShuffleBag {
  constructor(tetrominoArray) {
    this.tetrominoes = tetrominoArray;
    this.bag = [];
    this.refillBag();
    this.shuffle();
  }

  refillBag() {
    this.bag = [...this.tetrominoes];
  }

  shuffle() {
    for (let i = this.bag.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
    }
  }

  getRandomObject() {
    if (this.bag.length === 0) {
      this.refillBag();
      this.shuffle();
    }
    return this.bag.pop();
  }
}