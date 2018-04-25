import { expect } from 'chai';
import { SudokuSolver } from '../../src/index';

import seedrandom = require('seedrandom');
import { Data } from './Data';
import { Util } from '../../src/Util';

seedrandom('hello.', { global: true });

describe('backtracking sudoku', () => {

  it('should make a new full sudoku', function () {
    seedrandom('hello.', { global: true });
    const grid = SudokuSolver.generate();
    const str = grid.map(r => r.join('')).join('');
    expect(str).equals('947316852352987614168425937783269145591748263426531789679153428834692571215874396');
  });

  it('should make a new carved sudoku', function () {

    let grid = SudokuSolver.generate();
    grid = SudokuSolver.carve(grid, 40);
    const str = grid.map(r => r.join('')).join('');
    expect(str).equals('092700000080200700734010008003045002418090000000600000000000040000500106060000025');

  });

  it('should not human solve', function () {
    let grid = SudokuSolver.from(Data.str1);
    let universe = Util.getUniverseFromGrid(grid);
    expect(Util.getUniverseSize(universe)).equals(11 * 9 + (81 - 11));

    universe = SudokuSolver.humanSolve(universe);

    const size2 = Util.getUniverseSize(universe);
    expect(size2).equals(94);
  });

  it('should have more than one solution', function () {

    let grid = SudokuSolver.from(Data.str1);

    const result = SudokuSolver.getAllSolution(grid);
    // console.log('result', result.length);
    expect(result.length).equals(2);

  });

  it('should have more than one solution (2)', function () {

    let grid = SudokuSolver.from('104805036796041825385602140547283691013956470069417350631524080458769213972138564');

    const result = SudokuSolver.getAllSolution(grid);
    console.log('result', result.length);
    expect(result.length).equals(2);

  });

  
  







});