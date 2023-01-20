import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { Score } from "../src/Score.mjs";

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
function moveAllwayDown(board) {
  for (let i = 0; i < 10; i++) {
    board.moveDown();
  }
}

describe("Scoring", () => {
  let board;
  let score;
  beforeEach(() => {
    board = new Board(10, 6);
    score = new Score();
    board.addRowObserver(score);
  });

  it("start from the top middle with 0 score", () => {
    board.drop(Tetromino.I_SHAPE);

    expect(score.score).to.equal(0);
    expect(board.toString()).to.equalShape(
      `...IIII...
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
  });
    
  it("after clearing rows the score should increase", () => {
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
    /*
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       IIIII.IIII
       IIIII.IIII
       IIIII.IIII
       IIIII.IIII`
    );
    */
    board.drop(Tetromino.I_SHAPE);
    board.tick();
    board.rotateLeft();
    fallToBottom(board);
    expect(score.score).to.equal(1200);
    /*
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
    */
  });
  
  it("score increases after removing one row", () => {
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
    expect(score.score).to.equal(40);
/*
    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ..........
       .T......T.`
    );
       */
  });
    
});
/*
*/
