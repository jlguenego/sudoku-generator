function getSquareList(universe) {
    const result = [];
    for (let i = 0; i < 9; i++) {
        const square = [];
        const row = Math.floor(i / 3);
        const col = i % 3;
        [0, 1, 2].forEach(x => [0, 1, 2].forEach(y => square.push(universe[row + x][col + y])));
        result.push(square);
    }
    return result;
}

function getTransposed(universe) {
    const result = [];
    for (let i = 0; i < 9; i++) {
        const row = [];
        for (let j = 0; j < 9; j++) {
            row.push(universe[j][i]);
        }
        result.push(row);
    }
    return result;
}


class HumanSolver {

    static getLevel(universe) {
        return universe.map(r => r.map(c => c.length).reduce((acc, n) => acc + n, 0)).reduce((acc, n) => acc + n, 0);
    }

    static removeRowDuplicate(universe) {

        universe.forEach(row => {
            const list = row.reduce((acc, set) => {
                if (set.length === 1) {
                    acc.push(set[0]);
                }
                return acc;
            }, []);
            row.forEach(set => {
                if (set.length > 1) {
                    list.forEach(n => {
                        const index = set.indexOf(n);
                        if (index !== -1) {
                            set.splice(index, 1);
                        }
                    });
                }
            });
        });
    }

    static removeColDuplicate(universe) {
        const transposed = getTransposed(universe);
        HumanSolver.removeRowDuplicate(transposed);
    }

    static removeSquareDuplicate(universe) {
        const squareList = getSquareList(universe);
        HumanSolver.removeRowDuplicate(squareList);
    }
}

module.exports = HumanSolver;