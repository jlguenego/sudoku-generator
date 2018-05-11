export class Util {

    static deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    static popRand(array) {
        if (array.length === 0) {
            throw new Error('cannot pop from an empty array');
        }
        const index = Math.floor(Math.random() * array.length);
        const result = array[index];
        array.splice(index, 1);
        return result;
    }
    /**
     * Initialize a grid 9x9 with 0.
     * 
     * @static
     * @returns 
     * [[0,0,0,0,0,0,0,0,0],
     *  [0,0,0,0,0,0,0,0,0],
     *  [0,0,0,0,0,0,0,0,0],
     *  [0,0,0,0,0,0,0,0,0],
     *  [0,0,0,0,0,0,0,0,0],
     *  [0,0,0,0,0,0,0,0,0],
     *  [0,0,0,0,0,0,0,0,0],
     *  [0,0,0,0,0,0,0,0,0],
     *  [0,0,0,0,0,0,0,0,0]]
     * 
     * @memberof Util
     */
    static initGrid() {
        return new Array(9).fill(0).map(() => new Array(9).fill(0));
    }

    static makeGridFromString(str: string) {
        return new Array(9).fill(0).map((r, i) => new Array(9).fill(0).map((c, j) => +str.charAt(i * 9 + j)));
    }

    static getUniverseFromGrid(grid) {
        return grid.map(row => row.map(col => {
            if (col === 0) {
                return new Array(9).fill(0).map((n, i) => i + 1);
            }
            return [col];
        }));
    }

    static getUniverseFromEmptyGrid() {
        return new Array(9).fill(0).map(() => new Array(9).fill(0).map(Util.MakeNewA19));
    }

    static MakeNewA19 = () => new Array(9).fill(0).map((n, i) => i + 1);

    static getUniverseSize(universe) {
        return Util.sum(universe.map(row => row.map(col => col.length)).map(row => Util.sum(row)));
    }

    static sum(array) {
        return array.reduce((acc, n) => acc + n, 0);
    }

    static getSquareList(universe) {
        const result = [];
        for (let i = 0; i < 9; i++) {
            const square = [];
            const row = Math.floor(i / 3);
            const col = i % 3;
            [0, 1, 2].forEach(x => [0, 1, 2].forEach(y => square.push(universe[(row * 3) + x][(col * 3) + y])));
            result.push(square);
        }
        return result;
    }
/**
 * Compute the x y coordonnates from the string index.
 * Example : string '189000637736891524542300891678253149324918756915000382891000473263784915457139268'
 *                n  13
 * outputs { x: 1, y: 4 }
 * 
 * 
 * @static
 * @param {any} n 
 * @returns the coordonates
 * @memberof Util
 */
static getXY(n) {
        return {
            x: Math.floor(n / 9),
            y: n % 9
        };
    }
}
