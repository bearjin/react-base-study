const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        app: ['./client'],
    }, // 입력
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'], // browserlist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    'react-refresh/babel'
                ],
            },
        }]
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'), // __dirname : 현재 폴더
        filename: 'app.js',
        publicPath: '/dist/',
    }, // 출력
    devServer: {
        publicPath: '/dist/',
        hot: true,
    },
}