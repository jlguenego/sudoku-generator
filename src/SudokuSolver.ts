import { backtracker } from './backtracker';
import { HumanSolver } from './HumanSolver';
import { Util } from './Util';

function popRand(array) {
    if (array.length === 0) {
        throw new Error('cannot pop from an empty array');
    }
    const index = Math.floor(Math.random() * array.length);
    const result = array[index];
    array.splice(index, 1);
    return result;
}

function initGrid() {
    return new Array(9).fill(0).map(() => new Array(9).fill(0));
}

function getXY(n) {
    return {
        x: Math.floor(n / 9),
        y: n % 9
    }
}

function checkGrid(grid, x, y) {
    return checkRow(grid, x, y) && checkCol(grid, x, y) && checkSquare(grid, x, y);
}

function checkRow(grid, x, y) {
    return grid[x].indexOf(grid[x][y]) === y;
}

function checkCol(grid, x, y) {
    const column = grid.map(row => row[y]);
    return column.indexOf(grid[x][y]) === x;
}

function checkSquare(grid, x, y) {
    const n = grid[x][y];
    const i = Math.floor(x / 3);
    const j = Math.floor(y / 3);
    const square = grid.slice(i * 3, i * 3 + 3).map(row => row.slice(j * 3, j * 3 + 3));
    square[x % 3][y % 3] = 0;
    const flat = square.reduce((acc, row) => acc.concat(row), []);
    return flat.indexOf(n) === -1;
}

const config = {
    getSolutionStructure: initGrid,
    universe: new Array(9).fill(0).map(() => new Array(9).fill(0).map(Util.MakeNewA19)),
    getPossibilities: (universe, i) => {
        const { x, y } = getXY(i);
        return universe[x][y];
    },
    resetPossibilities: (possibilities, i, universeCopy) => {
        const { x, y } = getXY(i);
        const origPossibilities = universeCopy[x][y];
        origPossibilities.forEach(n => possibilities.push(n));
    },
    resetSolution: (solution, i) => {
        const { x, y } = getXY(i);
        solution[x][y] = 0;
    },
    setSolution: (solution, i, n) => {
        const { x, y } = getXY(i);
        solution[x][y] = n;
    },
    checkSolution: (solution, i) => {
        const { x, y } = getXY(i);
        return checkGrid(solution, x, y);
    },
    pop: (possibilities) => {
        return popRand(possibilities);
        // return possibilities.shift();
    },
    strategy: 'find-first',
    max: 2,
    length: 81,
};

export class SudokuSolver {

    static from(str: string) {
        return Util.makeGridFromString(str);
    }

    static generate() {
        config.universe = Util.getUniverseFromEmptyGrid();
        return backtracker(config);
    }

    static naiveCarve(grid, total) {
        let g;
        let i = 0;
        while (true) {
            g = JSON.parse(JSON.stringify(grid));
            const array = new Array(81).fill(0).map((n, i) => ({ r: Math.floor(i / 9), c: i % 9 }));
            for (let i = 0; i < total; i++) {
                const { r, c } = popRand(array);
                g[r][c] = 0;
            }
            if (SudokuSolver.checkOneSolution(g)) {
                break;
            }
            i++;
        }
        console.log('found in %d iterations', i);
        return g;

    }

    static checkOneSolution(grid) {
        return SudokuSolver.getAllSolution(grid).length === 1;
    }

    static getAllSolution(grid) {

        let universe = Util.getUniverseFromGrid(grid);
        universe = SudokuSolver.humanSolve(universe);
        const config2 = {
            ...config,
            universe,
            strategy: 'find-all',
            max: 2,
            length: 81,
            // pop: (possibilities) => {
            //     return possibilities.shift();
            // },
        };

        return backtracker(config2);
    }

    static humanSolve(universe) {
        // console.log('universe level before', HumanSolver.getLevel(universe));
        let result = Util.deepClone(universe);
        let size;
        let newSize = Util.getUniverseSize(result);
        do {
            size = newSize;
            HumanSolver.removeRowDuplicate(result);
            HumanSolver.removeColDuplicate(result);
            HumanSolver.removeSquareDuplicate(result);
            newSize = Util.getUniverseSize(result);
        } while (newSize < size);
        // console.log('universe level after', HumanSolver.getLevel(universe));
        return result;
    }

    static carve(grid, total) {
        return SudokuSolver.btcarve(grid, total);
    }

    static btcarve(grid, total) {
        while (true) {
            try {

                let carvedGrid;
                // perform a backtracking on carve.
                const universe = new Array(total).fill(0).map(() => new Array(81).fill(0).map((n, i) => ({ row: Math.floor(i / 9), col: i % 9 })));
                const config = {
                    getSolutionStructure: () => [],
                    universe,
                    getPossibilities: (universe, i) => {
                        return universe[i];
                    },
                    resetPossibilities: (possibilities, i, universeCopy) => {
                        const origPossibilities = universeCopy[i];
                        origPossibilities.forEach(n => possibilities.push(n));
                    },
                    resetSolution: (solution, i) => {
                        solution.pop();
                    },
                    setSolution: (solution, i, n) => {
                        if (solution.length === i) {
                            solution[i - 1] = n;
                            return;
                        }
                        if (solution.length === i - 1) {
                            solution.push(n);
                            return;
                        }
                    },
                    checkSolution: (solution, i) => {
                        // check if the last item is not equals to an existing one.
                        const last = solution[i - 1];
                        if (solution.findIndex(p => p.row === last.row && p.col === last.col) !== i - 1) {
                            return false;
                        }

                        carvedGrid = JSON.parse(JSON.stringify(grid));
                        solution.forEach(p => {
                            carvedGrid[p.row][p.col] = 0;
                        });
                        return SudokuSolver.checkOneSolution(carvedGrid);
                    },
                    pop: (possibilities) => {
                        const result = popRand(possibilities);
                        return result;
                    },
                    strategy: 'find-first',
                    maxIteration: 500,
                    length: total,
                };

                let solution = backtracker(config);
                carvedGrid = JSON.parse(JSON.stringify(grid));
                solution.forEach(p => {
                    carvedGrid[p.row][p.col] = 0;
                });
                if (!SudokuSolver.checkOneSolution(carvedGrid)) {
                    throw new Error('I am buggy');
                }
                return carvedGrid;
            } catch (e) {
                console.log('e', e.message)
            }

        }

    }


}


