import { RotatingShape } from './RotatingShape.mjs'
export class Tetromino {
  static T_SHAPE = {
    toString: function() {
      return ".T.\nTTT\n...\n";
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
    }
  };
  static T_SHAPE90 = {
    toString: function() {
      return ".T.\nTT.\n.T.\n";
    }
  };
}
