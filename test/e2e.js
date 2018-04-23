const chai = require('chai');
const expect = chai.expect;
const { SudokuSolver } = require('../index');

const seedrandom = require('seedrandom');

seedrandom('hello.', {
  global: true
});

require('./test.js')(describe, it, expect, SudokuSolver);

