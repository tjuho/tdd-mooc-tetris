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
    this.boardState = [];
    for (let r = 0; r < this.height; r++){
      this.boardState[r] = [];
      for (let c = 0; c < this.width; c++){
        this.boardState[r][c] = "."
      }
    }
  }
  
  canFall(){
    if (!this.hasFalling()){
      return false;
    }
    return this.height-1 > this.blocky && this.boardState[this.blocky+1][this.blockx] == ".";
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
    if (!this.canFall()) {
      console.log(this.blocky, this.blockx)
      console.log(this.boardState);
      this.boardState[this.blocky][this.blockx] = this.block.color;
      console.log(this.boardState);
      this.block = undefined;
      this.blocky = 0;
      this.blockx = parseInt(this.width/2);
    }
    this.blocky += 1;
    console.log(this.toString());
  }

  toString() {
    let res = "";
    for (let r = 0; r < this.height; r++){
      for (let c = 0; c < this.width; c++){
        if (this.block && this.blockx == c && this.blocky == r){
          res += this.block.color;
        } else {
          res += this.boardState[r][c];
        }
      }
      res += "\n"
    }
    return res;
  }
}
