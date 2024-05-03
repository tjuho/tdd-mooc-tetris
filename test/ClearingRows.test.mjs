import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}
function moveFarLeft(board) {
  for (let i = 0; i < 10; i++) {
    board.moveLeft();
  }
}
function moveFarRight(board) {
  for (let i = 0; i < 10; i++) {
    board.moveRight();
  }
}

describe("Clearing rows", () => {
  let board;
  beforeEach(() => {
    board = new Board(10, 6);
  });

  it("start from the top middle", () => {
    board.drop(Tetromino.I_SHAPE);

    expect(board.toString()).to.equalShape(
      `...IIII...
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
  });
    
  it("clears row after filling it", () => {
    for (let i=0; i < 4; i++){
      board.drop(Tetromino.I_SHAPE);
      board.tick();
      board.rotateLeft();
      moveFarRight(board);
      fallToBottom(board);
    }
    for (let i=0; i < 5; i++){
      board.drop(Tetromino.I_SHAPE);
      board.tick();
      board.rotateLeft();
      moveFarLeft(board);
      fallToBottom(board);
    }     
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       IIIII.IIII
       IIIII.IIII
       IIIII.IIII
       IIIII.IIII`
    );
    
    board.drop(Tetromino.I_SHAPE);
    board.tick();
    board.rotateLeft();
    fallToBottom(board);
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
  });
  
  it("rows collapse after clearing full row", () => {
    board.drop(Tetromino.T_SHAPE);
    board.tick();
    moveFarLeft(board);
    board.rotateRight();
    board.rotateRight();
    fallToBottom(board);
    board.drop(Tetromino.T_SHAPE);
    moveFarRight(board);
    board.tick();
    board.rotateRight();
    board.rotateRight();
    fallToBottom(board);
    board.drop(Tetromino.I_SHAPE);
    board.tick();
    fallToBottom(board);

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ..........
       .T......T.`
    );
  });
    
});
/*
*/
