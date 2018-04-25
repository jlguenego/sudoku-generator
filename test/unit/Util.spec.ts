import { expect } from 'chai';
import { Util } from '../../src/Util';

import seedrandom = require('seedrandom');

seedrandom('hello.', { global: true });

describe('backtracking sudoku', () => {

  it('should make a universe', function () {

    let grid = Util.makeGridFromString('189000637736891524542300891678253149324918756915000382891000473263784915457139268');

    const result = Util.getUniverseFromGrid(grid);
    expect(result).to.deep.equal([[[1],
    [8],
    [9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [6],
    [3],
    [7]],
    [[7], [3], [6], [8], [9], [1], [5], [2], [4]],
    [[5],
    [4],
    [2],
    [3],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [8],
    [9],
    [1]],
    [[6], [7], [8], [2], [5], [3], [1], [4], [9]],
    [[3], [2], [4], [9], [1], [8], [7], [5], [6]],
    [[9],
    [1],
    [5],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [3],
    [8],
    [2]],
    [[8],
    [9],
    [1],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4],
    [7],
    [3]],
    [[2], [6], [3], [7], [8], [4], [9], [1], [5]],
    [[4], [5], [7], [1], [3], [9], [2], [6], [8]]]);

  });





});