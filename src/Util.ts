export class Util {
    static getUniverseFromGrid(grid) {
        return grid.map(row => row.map(col => {
            if (col === 0) {
                return new Array(9).fill(0).map((n, i) => i + 1);
            }
            return [col];
        }));
    }
}
