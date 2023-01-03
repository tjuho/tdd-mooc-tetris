export class RotatingShape {
  shape;
  height;
  width;

  constructor(shape) {
    let temp = shape.replaceAll(' ', '').split('\n');
    this.height = temp.length;
    this.width = temp[0].length;
    this.shape = []
    for (let r = 0; r < this.height; r++){
      this.shape[r] = [];
      for (let c = 0; c < this.width; c++){
        this.shape[r][c] = temp[r].charAt(c);
      }
    }
  }
  
  rotateRight(){
    this.shape = this.shape[0].map((val, index) => this.shape.map(row => row[index]).reverse())
    return this
  }
  
  toString() {
    let res = "";
    for (let r = 0; r < this.height; r++){
      for (let c = 0; c < this.width; c++){
        res += this.shape[r][c];
      }
      res += "\n";
    }
    return res;
  }
}
