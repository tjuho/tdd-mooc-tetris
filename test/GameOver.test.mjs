import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";
import { Score } from "../src/Score.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Game Over", () => {
  let board;
  let observer;
  beforeEach(() => {
    board = new Board(10, 6);
    observer = { 
      gameOver: false,
      update: function(isOver) {
        console.log('call update function')
        this.gameOver = isOver;
      }
    };
    board.addGameOverObserver(observer);
  });
  it("after drop game is not over", () => {
    board.drop(Tetromino.I_SHAPE);

    expect(board.toString()).to.equalShape(
      `...IIII...
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
    expect(observer.gameOver).to.be.false;
  });
  it("almost game over", () => {
    for (let i=0; i < 6; i++){
      board.drop(Tetromino.I_SHAPE);
      fallToBottom(board);
    }     
    expect(observer.gameOver).to.be.false;
    expect(board.toString()).to.equalShape(
      `...IIII...
       ...IIII...
       ...IIII...
       ...IIII...
       ...IIII...
       ...IIII...`
      );
    });
    it("can not drop anymore -> game over", () => {
      for (let i=0; i < 7; i++){
        board.drop(Tetromino.I_SHAPE);
        fallToBottom(board);
      }     
      expect(observer.gameOver).to.be.true;
      expect(board.toString()).to.equalShape(
        `...IIII...
         ...IIII...
         ...IIII...
         ...IIII...
         ...IIII...
         ...IIII...`
        );
      });
  });