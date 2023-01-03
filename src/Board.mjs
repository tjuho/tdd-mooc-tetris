export class Board {
  width;
  height;
  block;
  blocky;
  blockx;
  boardState;
  
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.boardState = Array(height).fill(Array(width))
    for (let r = 0; r < this.height; r++){
      for (let c = 0; c < this.width; c++){
        this.boardState[r][c] = "."
      }
    }
  }
  
  hasFalling(){
    return this.block != undefined;
  }
  
  drop(block){
    if (this.hasFalling()){
      throw "already falling"
    } else {
      this.block = block;
      this.blockx = parseInt(this.width/2);
      this.blocky = 0;
    }
  }
  
  tick(){
    if (this.blocky == this.height) {
      this.block = undefined
    }
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
