
function test(describe, it, expect, SudokuSolver) {



    describe('backtracking sudoku', () => {

        it('should make a new full sudoku', function () {
            const grid = SudokuSolver.generate();
            const str = grid.map(r => r.join('')).join('');
            console.log('str', str);
            expect(str).equals('947316852352987614168425937783269145591748263426531789679153428834692571215874396');
        });

        it('should make a new carved sudoku', function () {

            let grid = SudokuSolver.generate();
            grid = SudokuSolver.carve(grid, 55);
            const str = grid.map(r => r.join('')).join('');
            console.log('str', str);
            expect(str).equals('092700000080200700734010008003045002418090000000600000000000040000500106060000025');

        });

    });
}

if (this.window) {
    this.window.test = test;
} else {
    module.exports = test;
}