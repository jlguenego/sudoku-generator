# sudoku-generator
Sudoku generator and carving

# Install

```
npm install @jlguenego/sudoku-generator
```

# Use

## Generating a sudoku solution

```
const { SudokuSolver } = require('@jlguenego/sudoku-generator');

const grid = SudokuSolver.generate();
```

## Carving a sudoku solution

```
const { SudokuSolver } = require('@jlguenego/sudoku-generator');

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

#Licence

ISC 2018 Jean-Louis GUENEGO

# Authors

Jean-Louis GUENEGO

