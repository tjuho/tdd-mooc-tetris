export class RotatingShape {
  shape;
  height;
  width;

  constructor(shape) {
    let temp = shape.replace(/[ \n]+/g, '\n').split('\n');
    this.height = temp.length;
    if (this.height == 0){
      this.width = 0
    } else {
      this.width = temp[0].length;
    }
    this.shape = []
    for (let r = 0; r < this.height; r++){
      this.shape[r] = [];
      for (let c = 0; c < this.width; c++){
        this.shape[r][c] = temp[r].charAt(c);
      }
    }
  }
  
  rotateRight(){ 
    let rs = new RotatingShape("")
    rs.shape = this.shape[0].map((val, index) => this.shape.map(row => row[index]).reverse());
    rs.height=this.width;
    rs.width = this.height;
    return rs
  }
  
  rotateLeft(){
    let rs = new RotatingShape("")
    rs.shape = this.shape[0].map((val, index) => this.shape.map(row => row[row.length-1-index]));
    rs.height=this.width;
    rs.width = this.height;
    return rs
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
