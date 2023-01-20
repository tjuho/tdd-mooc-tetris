import { expect } from "chai";
import { Tetromino } from "../src/Tetromino.mjs";
import { MyShuffleBag } from "../src/MyShuffleBag.mjs";

describe("Drop Random Tetrominoes", () => {
  let shufflebag;
  let tetrominoes;
  beforeEach(() => {
    tetrominoes = 
    [...Array(10).fill(Tetromino.T_SHAPE),
    ...Array(10).fill(Tetromino.I_SHAPE),
    ...Array(10).fill(Tetromino.O_SHAPE),
    ...Array(10).fill(Tetromino.S_SHAPE),
    ...Array(10).fill(Tetromino.Z_SHAPE),
    ...Array(10).fill(Tetromino.L_SHAPE),
    ...Array(10).fill(Tetromino.M_SHAPE)];
    shufflebag = new MyShuffleBag(tetrominoes);
  });

  it("check that all tetrominoes get dropped", () => {
    let tet = []
    for (let i=0; i < tetrominoes.length-9; i++){
      tet.push(shufflebag.getRandomObject());
    }
    for (let i = 0; i < tetrominoes.length; i++){
      expect(tet).to.include(tetrominoes[i]);
    }
  });

  it("check that two shuffle bags are different. This test might fail if you are super unlucky.", () => {
      const one = [...shufflebag.bag];
      shufflebag.shuffle();
      const two = [...shufflebag.bag];
      expect(two).to.not.eql(one);
  });
});
