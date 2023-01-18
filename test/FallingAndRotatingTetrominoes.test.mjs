import { expect } from "chai";
import { Board } from "../src/Board.mjs";
import { Tetromino } from "../src/Tetromino.mjs";

function fallToBottom(board) {
  for (let i = 0; i < 10; i++) {
    board.tick();
  }
}

describe("Falling and rotating tetrominoes", () => {
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
  
  it("can rotate right", () => {
    board.drop(Tetromino.I_SHAPE);
    board.tick();
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `.....I....
       .....I....
       .....I....
       .....I....
       ..........
       ..........`
    );
  });
  
  it("can rotate left", () => {
    board.drop(Tetromino.I_SHAPE);
    board.tick();
    board.rotateLeft();
    
    expect(board.toString()).to.equalShape(
      `.....I....
       .....I....
       .....I....
       .....I....
       ..........
       ..........`
    );
  });
  
  xit("can't rotate when there is no room in the top", () => {
    board.drop(Tetromino.I_SHAPE);
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `...IIII...
       ..........
       ..........
       ..........
       ..........
       ..........`
    );
  });
  
  xit("can not rotate when next to left wall", () => {
    board.drop(Tetromino.I_SHAPE);
    board.tick()
    board.rotateLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.moveLeft();
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `I.........
       I.........
       I.........
       I.........
       ..........
       ..........`
    );
  });
  
  xit("can not rotate when next to right wall", () => {
    board.drop(Tetromino.I_SHAPE);
    board.tick()
    board.rotateLeft();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.moveRight();
    board.rotateLeft();

    expect(board.toString()).to.equalShape(
      `.........I
       .........I
       .........I
       .........I
       ..........
       ..........`
    );
  });
  
  xit("can not rotate when on the last row", () => {
    board.drop(Tetromino.I_SHAPE);
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ..........
       ..........
       ...IIII...`
    );
  });
  
  xit("can not rotate when another piece blocks rotation", () => {
    board.drop(Tetromino.T_SHAPE);
    fallToBottom(board);
    board.drop(Tetromino.I_SHAPE);
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.moveDown();
    board.rotateRight();

    expect(board.toString()).to.equalShape(
      `..........
       ..........
       ..........
       ...IIII...
       ....T.....
       ...TTT....`
    );
  });
});
/*
*/
