const SudokuSolver = require('./SudokuSolver');

console.time('sudoku');

let grid = SudokuSolver.generate();
console.log('grid', grid);
grid = SudokuSolver.btcarve(grid, 55);
console.log('grid', grid);

console.timeEnd('sudoku');