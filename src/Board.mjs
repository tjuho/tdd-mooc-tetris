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
  rowObservers;
  
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.boardState = [];
    for (let r = 0; r < this.height; r++){
      this.boardState[r] = Array(width).fill(".");
    }
    this.rowObservers = [];
  }
  
  canFall(x,y){
    if (!this.hasFalling()){
      return false;
    }
    return this.isEmpty(x,y+1);
  }
  
  isEmpty(x,y){
    return x >= 0 && y >= 0 && x < this.width && y < this.height && (this.boardState[y][x] == ".");
  }    
  
  hasFalling(){
    return this.tetromino != undefined;
  }
  
  drop(tetromino){
    if (this.hasFalling()){
      throw "already falling"
    } else {
      this.tetromino = tetromino
      this.tetrominox = parseInt(this.width/2) - parseInt(tetromino.size/2 - 0.5) - 1;
      this.tetrominoy = tetromino.dropOffset;
    }
  }
  
  tick(){
    if (this.hasFalling()){
      let canfall = true
      for (let y = 0; y < this.tetromino.size; y++){
        for (let x = 0; x < this.tetromino.size; x++){
          if (this.tetromino.matrix[y][x]){
            canfall = canfall && this.canFall(this.tetrominox+x, this.tetrominoy+y);
          }
        }
      }
      if (canfall){
        this.tetrominoy += 1;
      } else {
        for (let y = 0; y < this.tetromino.size; y++){
          for (let x = 0; x < this.tetromino.size; x++){
            if (this.tetromino.matrix[y][x]){
              this.boardState[this.tetrominoy+y][this.tetrominox+x] = this.tetromino.color;
            }
          }
        }
        let count = this.removeFullRows();
        this.callRowObservers(count);
        this.tetromino = undefined
      }
    }    
  }
    
  getTetrominoBlockCoordinates(tetromino){
    let coordinates = [];
    for (let y = 0; y < tetromino.size; y++){
      for (let x = 0; x < tetromino.size; x++){
        if (tetromino.matrix[y][x]){
          coordinates.push([x, y]);
        }
      }
    }
    return coordinates; 
  };    
  
  canMove(dx,dy){
    if (this.hasFalling()){
      let canmove = true;
      for (let y = 0; y < this.tetromino.size; y++){
        for (let x = 0; x < this.tetromino.size; x++){
          if (this.tetromino.matrix[y][x]){
            canmove = canmove && this.isEmpty(this.tetrominox+x+dx, this.tetrominoy+y+dy);
          }
        }
      }
      return canmove;
    }      
    return false;
  }
  
  moveLeft(){
    if (this.canMove(-1,0)) {
      this.tetrominox -= 1;
    }
  }

  
  moveRight(){
    if (this.canMove(1,0)) {
      this.tetrominox += 1;
    }
  }
  
  moveDown(){
    if (this.canMove(0,1)) {
      this.tetrominoy += 1;
    }
  }
  
  rotateLeft(){
    if (!this.hasFalling()){
      return;
    }
    let rotatedTetromino = this.tetromino.rotateLeft();
    let coords = this.getTetrominoBlockCoordinates(rotatedTetromino);
    let canrotate = true;
    let maxx = this.tetrominox+coords.reduce(function(acc, x){ if (x[0] > acc) {return x[0]}; return acc; }, 0); 
    let minx = this.tetrominox+coords.reduce(function(acc, x){ if (x[0] < acc) {return x[0]}; return acc; }, this.width-1);
    for (let i=0; i < coords.length; i++){
      canrotate = canrotate && this.isEmpty(coords[i][0]+this.tetrominox, coords[i][1]+this.tetrominoy);
    }
    if (canrotate){
      this.tetromino = rotatedTetromino;
    } else {
      this.tetromino = rotatedTetromino;
      if (maxx >= this.width && this.canMove(this.width-maxx-1,0)){
        this.tetrominox = this.tetrominox - (maxx-this.width+1);
      } else {
        if (minx < 0 && this.canMove(-minx,0)){
          this.tetrominox = this.tetrominox - minx;
        } else {
          this.tetromino = this.tetromino.rotateRight();
        }
      }      
    }
  }

  rotateRight(){
    if (!this.hasFalling()){
      return;
    }
    let rotatedTetromino = this.tetromino.rotateRight();
    let coords = this.getTetrominoBlockCoordinates(rotatedTetromino);
    let canrotate = true;
    let maxx = this.tetrominox+coords.reduce(function(acc, x){ if (x[0] > acc) {return x[0]}; return acc; }, 0); 
    let minx = this.tetrominox+coords.reduce(function(acc, x){ if (x[0] < acc) {return x[0]}; return acc; }, this.width-1);
    for (let i=0; i < coords.length; i++){
      canrotate = canrotate && this.isEmpty(coords[i][0]+this.tetrominox, coords[i][1]+this.tetrominoy);
    }
    if (canrotate){
      this.tetromino = rotatedTetromino;
    } else {
      this.tetromino = rotatedTetromino;
      if (maxx >= this.width && this.canMove(this.width-maxx-1,0)){
        this.tetrominox = this.tetrominox - (maxx-this.width+1);
      } else {
        if (minx < 0 && this.canMove(-minx,0)){
          this.tetrominox = this.tetrominox - minx;
        } else {
          this.tetromino = this.tetromino.rotateLeft();
        }
      }      
    }
  }
  
  removeFullRows(){
    let fullRows = [];
    for (let r = 0; r < this.height; r++){
      let isfull = true;
      for (let c = 0; c < this.width; c++){
        if (this.isEmpty(c,r)){
          isfull = false; 
          break;
        }
      }
      if (isfull){
        fullRows.push(r);
      }
    }
    let count = fullRows.length;
    if (fullRows.length > 0){
      let newstate = [];
      for (let i=0; i<fullRows.length; i++){
        newstate.push(Array(this.width).fill("."));
      }
      for (let r=0; r < this.height; r++){
        if (fullRows.length == 0 || fullRows[0] != r){
          newstate.push(this.boardState[r]);
        } else {
          fullRows.shift();
        }
      }
      this.boardState = newstate;
    }
    for (let i = 0; i < fullRows.length; i++){
      this.clearRow(fullRows[i]);
    }
    return count;
  }
  
  clearRow(row){
    this.boardState[row] = Array(this.width).fill(".")
  }
  
  addRowObserver(obj){
    this.rowObservers.push(obj);
  }
  
  callRowObservers(rows){
    for (let i=0; i<this.rowObservers.length; i++){
      this.rowObservers[i].update(rows);
    }
  }
  
  toString() {
    let res = "";
    for (let r = 0; r < this.height; r++){
      for (let c = 0; c < this.width; c++){
        if (this.hasFalling() && r >= this.tetrominoy && r < this.tetrominoy + this.tetromino.size 
        && c >= this.tetrominox && c < this.tetrominox + this.tetromino.size 
        && this.tetromino.matrix[r-this.tetrominoy][c-this.tetrominox]){
          res += this.tetromino.color;
        } else {
          res += this.boardState[r][c];
        }
      }
      res += "\n";
    }
    return res;
  }
}
