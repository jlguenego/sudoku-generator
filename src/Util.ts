export class Util {

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
}
