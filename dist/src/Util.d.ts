export declare class Util {
    static deepClone(obj: any): any;
    static popRand(array: any): any;
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
    static initGrid(): any[][];
    static makeGridFromString(str: string): number[][];
    static getUniverseFromGrid(grid: any): any;
    static getUniverseFromEmptyGrid(): number[][][];
    static MakeNewA19: () => number[];
    static getUniverseSize(universe: any): any;
    static sum(array: any): any;
    static getSquareList(universe: any): any[];
}
