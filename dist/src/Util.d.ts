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
    static getXY(n: any): {
        x: number;
        y: number;
    };
}
