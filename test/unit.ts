import { expect } from 'chai';
import { SudokuSolver } from '../src/index';

import seedrandom = require('seedrandom');

seedrandom('hello.', { global: true });

describe('backtracking sudoku', () => {

  it('should make a new full sudoku', function () {
    const grid = SudokuSolver.generate();
    const str = grid.map(r => r.join('')).join('');
    expect(str).equals('947316852352987614168425937783269145591748263426531789679153428834692571215874396');
  });

  it('should make a new carved sudoku', function () {

    let grid = SudokuSolver.generate();
    grid = SudokuSolver.carve(grid, 55);
    const str = grid.map(r => r.join('')).join('');
    expect(str).equals('092700000080200700734010008003045002418090000000600000000000040000500106060000025');

  });

  it('should convert a string to a grid', function () {

    let grid = SudokuSolver.from('189000637736891524542300891678253149324918756915000382891000473263784915457139268');
    expect(grid).to.deep.equal(
      [['1', '8', '9', '0', '0', '0', '6', '3', '7'],
      ['7', '3', '6', '8', '9', '1', '5', '2', '4'],
      ['5', '4', '2', '3', '0', '0', '8', '9', '1'],
      ['6', '7', '8', '2', '5', '3', '1', '4', '9'],
      ['3', '2', '4', '9', '1', '8', '7', '5', '6'],
      ['9', '1', '5', '0', '0', '0', '3', '8', '2'],
      ['8', '9', '1', '0', '0', '0', '4', '7', '3'],
      ['2', '6', '3', '7', '8', '4', '9', '1', '5'],
      ['4', '5', '7', '1', '3', '9', '2', '6', '8']]);

  });

  it('should have more than one solution', function () {

    let grid = SudokuSolver.from('189000637736891524542300891678253149324918756915000382891000473263784915457139268');

    const result = SudokuSolver.checkOneSolution(grid);
    expect(result).equals(false);

  });





});