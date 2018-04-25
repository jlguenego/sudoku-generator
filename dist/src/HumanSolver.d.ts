/**
 * Human solver try to reduce the universe size by applying rule for removing possibilities.
 * The universe is a mutable object for performance purpose.
 *
 * @export
 * @class HumanSolver
 */
export declare class HumanSolver {
    static getLevel(universe: any): any;
    static removeRowDuplicate(universe: any): void;
    static removeColDuplicate(universe: any): void;
    static removeSquareDuplicate(universe: any): void;
}
