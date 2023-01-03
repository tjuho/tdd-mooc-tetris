export class RotatingShape {
  shape;
  height;
  width;

  constructor(shape) {
    let temp = shape.replaceAll(' ', '').split('\n');
    this.height = temp.length
    this.width = temp[0].length
    this.shape = []
    for (let r = 0; r < this.height; r++){
      this.shape[r] = [];
      for (let c = 0; c < this.width; c++){
        console.log(temp[r]);
        this.shape[r][c] = temp[r].charAt(c);
      }
    }
    console.log(this.shape);
  }
  
  rotateRigth(){
    
  }
  
  toString() {
    let res = "";
    for (let r = 0; r < this.height; r++){
      for (let c = 0; c < this.width; c++){
        res += this.shape[r][c];
      }
      res += "\n"
    }
    return res;
  }
}
