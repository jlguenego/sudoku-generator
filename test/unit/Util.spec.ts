import { expect } from 'chai';
import { Util } from '../../src/Util';
import { Data } from './Data';

import seedrandom = require('seedrandom');

seedrandom('hello.', { global: true });

describe('backtracking sudoku', () => {

  let grid = Util.makeGridFromString(Data.str1);

  it('MakeNewA19', function () {
    expect(Util.MakeNewA19()).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should make a universe', function () {
    const result = Util.getUniverseFromGrid(grid);
    expect(result).to.deep.equal(Data.universe1);
  });

  it('should make the sum', function () {
    const sum = Util.sum([10, 13, 3]);
    expect(sum).equals(26);
  });

  it('should compute the universe size', function () {
    const universe = Util.getUniverseFromGrid(grid);
    const result = Util.getUniverseSize(universe);
    expect(result).equals(11 * 9 + (81 - 11));
  });








});