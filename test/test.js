
function test(describe, it, expect, SudokuSolver, seedrandom) {



    describe('backtracking sudoku', () => {

        it('should make a new full sudoku', function () {
            const grid = SudokuSolver.generate();
            const str = grid.map(r => r.join('')).join('');
            console.log('str', str);
            expect(str).equals('947316852352987614168425937783269145591748263426531789679153428834692571215874396');
        });

        it('should make a new carved sudoku', function () {
            seedrandom('hello.', { global: true });
            let grid = SudokuSolver.generate();
            grid = SudokuSolver.carve(grid, 55);
            const str = grid.map(r => r.join('')).join('');
            expect(str).equals('040000050300907000068400037000260100000008260026001000000050008030000071000874000');
        
          });

    });
}

if (this.window) {
    this.window.test = test;
} else {
    module.exports = test;
}