import { expect } from 'chai';
import { SudokuSolver } from '../../src/index';

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

  it('should have more than one solution', function () {

    let grid = SudokuSolver.from('189000637736891524542300891678253149324918756915000382891000473263784915457139268');

    const result = SudokuSolver.getAllSolution(grid);
    console.log('result', result.length);
    expect(result.length).equals(2);

  });





});