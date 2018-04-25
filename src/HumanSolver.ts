import { Util } from "./Util";


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
/**
 * Human solver try to reduce the universe size by applying rule for removing possibilities.
 * The universe is a mutable object for performance purpose.
 * 
 * @export
 * @class HumanSolver
 */
export class HumanSolver {

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
        const squareList = Util.getSquareList(universe);
        HumanSolver.removeRowDuplicate(squareList);
    }
}
