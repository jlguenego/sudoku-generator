import { expect } from 'chai';
import { SudokuSolver } from '../../src/index';

import seedrandom = require('seedrandom');
import { Data } from './Data';
import { Util } from '../../src/Util';
import { HumanSolver } from '../../src/HumanSolver';

seedrandom('hello.', { global: true });

describe('human solver', () => {

  it('should restrict universe based on row duplicate', function () {
    const universe = Util.deepClone(Data.universe1);
    expect(Util.getUniverseSize(universe)).equals(169);
    HumanSolver.removeRowDuplicate(universe);
    // console.log('universe', universe);
    expect(Util.getUniverseSize(universe)).equals(101);
  });

  it('should restrict universe based on col duplicate', function () {
    const universe = Util.deepClone(Data.universe1);
    HumanSolver.removeColDuplicate(universe);
    // console.log('universe', universe);
    expect(Util.getUniverseSize(universe)).equals(111);
  });

  it('should restrict universe based on square duplicate', function () {
    const universe = Util.deepClone(Data.universe1);
    HumanSolver.removeSquareDuplicate(universe);
    console.log('universe', universe);
    expect(Util.getUniverseSize(universe)).equals(1);
  });

  






});