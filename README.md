# sudoku-generator
Sudoku generator and carving

# Install

```
npm install sudoku-generator
```

# Use

## Generating a sudoku solution

```
const { SudokuSolver } = require('sudoku-generator');

const grid = SudokuSolver.generate();
```

## Carving a sudoku solution

```
const { SudokuSolver } = require('sudoku-generator');

const grid = SudokuSolver.generate();
// remove 55 case while insuring there is one and only one solution.
const grid2 = SudokuSolver.carve(grid, 55);
```

# Test

For running the automated test, just run:

```
npm test
```

If you decide to improve this software, 
just make a pull request with everything tested with [mocha](https://mochajs.org/).


# Authors

Jean-Louis GUENEGO

