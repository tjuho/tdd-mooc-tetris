import { RotatingShape } from './RotatingShape.mjs'
export class Tetromino {
  static T_SHAPE = {
    color: "T",
    size: 3,
    matrix: [[false, true, false], [true, true, true],[false, false, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.T_SHAPE270;
    },
    rotateLeft: function() {
      return Tetromino.T_SHAPE90;
    },
    toString: function() {
      let res = "";
      for (let r = 0; r < this.size; r++){
        for (let c = 0; c < this.size; c++){
          if (this.hasBlock(c,r)){
            res += this.color;
          } else {
            res += ".";
          }
        }
        res += "\n";
      }
      return res;
    }
  };
  static T_SHAPE270 = {
    color: "T",
    size: 3,
    matrix: [[false, true, false], [false, true, true],[false, true, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.T_SHAPE180;
    },
    rotateLeft: function() {
      return Tetromino.T_SHAPE;
    },
    toString: function() {
      let res = "";
      for (let r = 0; r < this.size; r++){
        for (let c = 0; c < this.size; c++){
          if (this.hasBlock(c,r)){
            res += this.color;
          } else {
            res += ".";
          }
        }
        res += "\n";
      }
      return res;
    }
  };
  static T_SHAPE90 = {
    color: "T",
    size: 3,
    matrix: [[false, true, false], [true, true, false],[false, true, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.T_SHAPE;
    },
    rotateLeft: function() {
      return Tetromino.T_SHAPE180;
    },
    toString: function() {
      let res = "";
      for (let r = 0; r < this.size; r++){
        for (let c = 0; c < this.size; c++){
          if (this.hasBlock(c,r)){
            res += this.color;
          } else {
            res += ".";
          }
        }
        res += "\n";
      }
      return res;
    }
  };
  static T_SHAPE180 = {
    color: "T",
    size: 3,
    matrix: [[true, true, true], [false, true, false],[false, false, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.T_SHAPE90;
    },
    rotateLeft: function() {
      return Tetromino.T_SHAPE270;
    },
    toString: function() {
      let res = "";
      for (let r = 0; r < this.size; r++){
        for (let c = 0; c < this.size; c++){
          if (this.hasBlock(c,r)){
            res += this.color;
          } else {
            res += ".";
          }
        }
        res += "\n";
      }
      return res;
    }
  };
}
