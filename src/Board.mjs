export class Board {
  width;
  height;
  block;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  drop(block){
    this.block = block;
    this.blockx = this.width/2;
    this.blocky = 0;
  }

  toString() {
    let res = "";
    for (let r = 0; r < this.height; r++){
      for (let c = 0; c < this.width; c++){
        res += "."
      }
      res += "\n"
    }
    return res;
  }
}
