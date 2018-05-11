import { expect } from 'chai';
import { Util } from '../../src/Util';
import { Data } from './Data';

import seedrandom = require('seedrandom');

seedrandom('hello.', { global: true });

describe('backtracking sudoku', () => {



  it('MakeNewA19', function () {
    expect(Util.MakeNewA19()).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should make a universe', function () {
    let grid = Util.makeGridFromString(Data.str1);
    const result = Util.getUniverseFromGrid(grid);
    expect(result).to.deep.equal(Data.universe1);
  });

  it('should make the sum', function () {
    const sum = Util.sum([10, 13, 3]);
    expect(sum).equals(26);
  });

  it('should compute the universe size', function () {
    let grid = Util.makeGridFromString(Data.str1);
    const universe = Util.getUniverseFromGrid(grid);
    const result = Util.getUniverseSize(universe);
    expect(result).equals(11 * 9 + (81 - 11));
  });

  it('should get the sudoku sqaure in the rows', function () {
    let grid = Util.makeGridFromString(Data.str1);
    const universe = Util.getUniverseFromGrid(grid);
    const result = Util.getSquareList(universe);
    expect(result).to.deep.equal(Data.squareUniverse1);
  });

  it('should randomly pop a number from an array', function () {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    seedrandom('truc', { global: true });
    const n = Util.popRand(array);
    expect(n).equals(2);
    expect(array).to.deep.equal([0, 1, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should init an 9x9 array with 0', function () {
    const array = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]];
    expect(Util.initGrid()).to.deep.equal(array);
  });

  it('should return { x: 1, y: 4 } when n is 13', function () {
    const result = Util.getXY(13);
    expect(result).to.deep.equal({ x: 1, y: 4 });
  });

});