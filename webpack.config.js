const path = require('path');

const configNode = {
    entry: {
        SudokuSolver: './src/index.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'sudoku-generator.node.js',
        libraryTarget: 'commonjs',
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [{
            test: /\.ts$/,
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
