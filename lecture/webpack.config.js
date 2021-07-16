const path = require('path');

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
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'), // __dirname : 현재 폴더
        filename: 'app.js',
    }, // 출력 
}