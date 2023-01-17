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
      this.tetrominox = parseInt(this.width/2) - parseInt(tetromino.size/2) - 1;
      this.tetrominoy = 0;
    }
  }
  
  tick(){
    canfall = true
    for (let y = 0; y < this.tetromino.size; y++){
      for (let x = 0; x < this.tetromino.size; x++){
        if (this.tetromino[y][x]){
          canfall = canfall && this.canFall(this.tetrominox+x, this.tetrominoy+y);
        }
      }
    }
    if (canfall){
      this.tetrominoy += 1;
    }
  }

  toString() {
    let res = "";
    for (let r = 0; r < this.height; r++){
      for (let c = 0; c < this.width; c++){
          console.log(c,r);
        if (r >= this.tetrominoy && r < this.tetrominoy + this.tetromino.size 
        && c >= this.tetrominox && c < this.tetrominox + this.tetromino.size 
        && this.tetromino.matrix[r-this.tetrominoy][c-this.tetrominox]){
          res += this.tetromino.color;
        } else {
          res += ".";
        }
      }
      res += "\n";
    }
    return res;
  }
}
