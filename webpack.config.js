const path = require('path');

const config = {
    entry: {
        SudokuSolver: './src/SudokuSolver.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2',
    },
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

module.exports = config;