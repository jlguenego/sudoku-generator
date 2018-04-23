const path = require('path');

const configNode = {
    entry: {
        SudokuSolver: './src/SudokuSolver.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'sudoku-generator.node.js',
        libraryTarget: 'commonjs2',
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [{
            test: /\.ts$/,
            include: path.resolve(__dirname, 'app'),
            exclude: /node_modules/,
            use: [{
                loader: 'awesome-typescript-loader',
                options: {
                    configFileName: path.resolve(__dirname, './tsconfig.json')
                }
            }]
        }]
    },
    devtool: 'source-map',
    plugins: []
};

const configWeb = { ...configNode };

configWeb.entry = {
    SudokuSolver: './src/web.ts',
};

configWeb.output = {
    path: path.resolve(__dirname, './dist'),
    filename: 'sudoku-generator.web.js',
};

configWeb.mode = 'production';

const config = [configNode, configWeb];

module.exports = config;
