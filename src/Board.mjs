export class Board {
  width;
  height;
  block;
  blocky;
  blockx;
  
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  drop(block){
    this.block = block;
    this.blockx = parseInt(this.width/2);
    this.blocky = 0;
  }
  
  tick(){
    this.blocky += 1;
  }

  toString() {
    let res = "";
    for (let r = 0; r < this.height; r++){
      for (let c = 0; c < this.width; c++){
        if (this.blockx == c && this.blocky == r){
          res += this.block.color;
        } else {
          res += "." ;
        }
      }
      res += "\n"
    }
    return res;
  }
}
