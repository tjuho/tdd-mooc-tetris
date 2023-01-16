import { RotatingShape } from './RotatingShape.mjs'
export class Tetromino {
  static T_SHAPE = {
    color: "T",
    size: 3,
    matrix: [[false, true, false], [true, true, true],[false, false, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
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
    },
    rotateRight: function() {
      return Tetromino.T_SHAPE270;
    },
    rotateLeft: function() {
      return Tetromino.T_SHAPE90;
    }
  };
  static T_SHAPE270 = {
    toString: function() {
      return ".T.\n.TT\n.T.\n";
    },
    rotateRight: function() {
      return Tetromino.T_SHAPE180;
    },
    rotateLeft: function() {
      return Tetromino.T_SHAPE;
    }
  };
  static T_SHAPE90 = {
    toString: function() {
      return ".T.\nTT.\n.T.\n";
    },
    rotateRight: function() {
      return Tetromino.T_SHAPE;
    },
    rotateLeft: function() {
      return Tetromino.T_SHAPE180;
    }
  };
  static T_SHAPE180 = {
    toString: function() {
      return "TTT\n.T.\n...\n";
    },
    rotateRight: function() {
      return Tetromino.T_SHAPE90;
    },
    rotateLeft: function() {
      return Tetromino.T_SHAPE270;
    }
  };
}
