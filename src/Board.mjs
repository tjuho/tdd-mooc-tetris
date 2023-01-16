export class Board {
  width;
  height;
  tetromino;
  tetrominox;
  tetrominoy;
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
  
  canFall(x,y){
    if (!this.hasFalling()){
      return false;
    }
    return this.height-1 > y && this.isEmpty(x,y+1);
  }
  
  isEmpty(x,y){
    return !(this.boardState[y][x] == ".");
  }    
  
  hasFalling(){
    return this.tetromino != undefined;
  }
  
  drop(tetromino){
    if (this.hasFalling()){
      throw "already falling"
    } else {
      this.tetromino = tetromino
      this.tetrominox = parseInt(this.width/2) - parseInt(tetromino.size/2);
      this.tetrominoy = 0;
    }
  }
  
  tick(){
    if (!this.canFall()) {
      this.boardState[this.blocky][this.blockx] = this.block.color;
      this.block = undefined;
      this.blocky = 0;
      this.blockx = parseInt(this.width/2);
    }
    this.blocky += 1;
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
