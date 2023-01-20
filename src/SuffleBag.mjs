export class ShuffleBag {
  constructor(objectCounts) {
    this.objectCounts = objectCounts;
    this.objects = [];
    this.refillBag();
  }

  refillBag() {
    this.objects = [];
    for (const object in this.objectCounts) {
      for (let i = 0; i < this.objectCounts[object]; i++) {
        this.objects.push(object);
      }
    }
    this.shuffle();
  }

  shuffle() {
    for (let i = this.objects.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.objects[i], this.objects[j]] = [this.objects[j], this.objects[i]];
    }
  }

  getRandomObject() {
    if (this.objects.length === 0) {
      this.refillBag();
    }
    return this.objects.pop();
  }
}