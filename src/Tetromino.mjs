import { RotatingShape } from './RotatingShape.mjs'
export class Tetromino {
  
  static T_SHAPE = {
    dropOffset: 0,
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
  static I_SHAPE = {
    dropOffset: -1,
    color: "I",
    size: 4,
    matrix: [[false, false, false, false], [true, true, true, true], [false, false, false, false], [false, false, false, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.I_SHAPE90;
    },
    rotateLeft: function() {
      return Tetromino.I_SHAPE90;
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
  static I_SHAPE90 = {
    color: "I",
    size: 4,
    matrix: [[false, false, true, false], [false, false, true, false], [false, false, true, false], [false, false, true, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.I_SHAPE;
    },
    rotateLeft: function() {
      return Tetromino.I_SHAPE;
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
  static O_SHAPE = {
    dropOffset: 0,
    color: "O",
    size: 2,
    matrix: [[true, true], [true, true]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.O_SHAPE;
    },
    rotateLeft: function() {
      return Tetromino.O_SHAPE;
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
  static S_SHAPE = {
    dropOffset: -1,
    color: "S",
    size: 3,
    matrix: [[false, false, false], [false, true, true],[true, true, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.S_SHAPE90;
    },
    rotateLeft: function() {
      return Tetromino.S_SHAPE90;
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
  static S_SHAPE90 = {
    color: "S",
    size: 3,
    matrix: [[true, false, false], [true, true, false],[false, true, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.S_SHAPE;
    },
    rotateLeft: function() {
      return Tetromino.S_SHAPE;
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
  static Z_SHAPE = {
    dropOffset: -1,
    color: "Z",
    size: 3,
    matrix: [[false, false, false], [true, true, false],[false, true, true]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.Z_SHAPE90;
    },
    rotateLeft: function() {
      return Tetromino.Z_SHAPE90;
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
  static Z_SHAPE90 = {
    color: "Z",
    size: 3,
    matrix: [[false, false, true], [false, true, true],[false, true, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.Z_SHAPE;
    },
    rotateLeft: function() {
      return Tetromino.Z_SHAPE;
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
  static L_SHAPE = {
    dropOffset: -1,
    color: "L",
    size: 3,
    matrix: [[false, false, false], [true, true, true],[true, false, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.L_SHAPE270;
    },
    rotateLeft: function() {
      return Tetromino.L_SHAPE90;
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
  static L_SHAPE90 = {
    color: "L",
    size: 3,
    matrix: [[false, true, false], [false, true, false],[false, true, true]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.L_SHAPE;
    },
    rotateLeft: function() {
      return Tetromino.L_SHAPE180;
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
  static L_SHAPE270 = {
    color: "L",
    size: 3,
    matrix: [[true, true, false], [false, true, false],[false, true, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.L_SHAPE180;
    },
    rotateLeft: function() {
      return Tetromino.L_SHAPE;
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
  static L_SHAPE180 = {
    color: "L",
    size: 3,
    matrix: [[false, false, false], [false, false, true],[true, true, true]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.L_SHAPE90;
    },
    rotateLeft: function() {
      return Tetromino.L_SHAPE270;
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
  static M_SHAPE = {
    dropOffset: -1,
    color: "M",
    size: 3,
    matrix: [[false, false, false], [true, true, true],[false, false, true]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.M_SHAPE270;
    },
    rotateLeft: function() {
      return Tetromino.M_SHAPE90;
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
  static M_SHAPE90 = {
    color: "M",
    size: 3,
    matrix: [[false, true, true], [false, true, false],[false, true, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.M_SHAPE;
    },
    rotateLeft: function() {
      return Tetromino.M_SHAPE180;
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
  static M_SHAPE270 = {
    color: "M",
    size: 3,
    matrix: [[false, true, false], [false, true, false],[true, true, false]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.M_SHAPE180;
    },
    rotateLeft: function() {
      return Tetromino.M_SHAPE;
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
  static M_SHAPE180 = {
    color: "M",
    size: 3,
    matrix: [[false, false, false], [true, false, false],[true, true, true]],
    hasBlock: function(x,y) {
      return this.matrix[y][x];
    },
    rotateRight: function() {
      return Tetromino.M_SHAPE90;
    },
    rotateLeft: function() {
      return Tetromino.M_SHAPE270;
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
