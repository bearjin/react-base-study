# 리액트를 왜 쓰는가? 
- 사용자 경험이 좋아진다. 싱글페이지어플리케이션(SPA) : 일반적인 웹사이트과 다른 페이지 전환없이 앱처럼 동작하도록 구현
- 데이터와 화면을 일치 시키는데 어려움이 있는데 리액트를 사용해 데이터 처리를 쉽게 할 수 있다(사용자 선택에 따른 변경 되는 부분 예: 좋아요, 댓글 등등)
- 중복되는 요소를 컴포넌트화 시켜서 쉽게 적용할 수 있고 유지 보수에도 유리하다.

## Babel
JavaScript 엔진에서 실행할 수 있는 이전 버전과 호환되는 JavaScript 버전으로 변환하는 데 주로 사용되는 무료 오픈 소스 JavaScript 트랜스컴파일러로 JavaScript 최신 문법을 사용할 수 있게 해줍니다.
```
<div id="output"></div>
<script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
<script type="text/babel">
    const getMessage = () => "Hello World";
    document.getElementById('output').innerHTML = getMessage();
</script>
```

## JSX ( JS + XML )

## Method
함수를 메소드화 시키는 이유는 렌더링 될 때 마다 함수를 매번 재선언하지 않아 불필요한 메모리 낭비를 막을 수 있다.

## this
```
onChange = function(e) {{this.setState({value: e.target.value})}} 오류

onChange = function(e) {{this.setState({value: e.target.value})}}.bind(this) 정상
```
컴포넌트에서 화살표 함수를 사용하지 않고 함수를 선언할 경우 this는 컴포넌트 본인을 가리키지 못하고 다른 객체를 가리키게 되기 때문에 this를 bind 시켜줘야 합니다.
```
onChange = (e) => {{this.setState({value: e.target.value})}}
```
화살표 함수는 this를 컴포넌트 본인을 가르켜 주기 때문에 this를 bind 시켜주지 않아도 정상적으로 작동이 됩니다.

## setState
```
this.setState((prevState) => {
    return {
        value: prevState.value + 1;
    };
});
```
- setState는 비동기이기 때문에 예전 state 값을 이용해 새로운 state 값을 만들때는 prevState를 이용해줘야 한다. setState 안에서 this.state를 사용할 경우   
- setState로 state 의 값이 변하는 경우 렌더링 이루어 진다.
- 여러개의 state가 같이 수정 되는 경우에 state가 수정된 만큼 렌더링이 일어날것 같지만 실제 렌더링은 한번만 이루어진다. React가 setState를 한번에 모아서 처리하기 때문에

## ref
```
input; 

ref={(c) => {this.input = c;}}

this.input.focus();
```
document.querySelector(태그)를 사용하지 않고 태그에 ref를 선언하여 사용할 수 있다.

## Function Component(함수형 컴포넌트)
- setState, ref 를 사용하지 못한다. 두가지는 클래스형 컴포넌트에서 사용 가능
- state가 변할 경우 클래스형 컴포넌트와 똑같이 렌더링이 이루어 진다. 다른점은 클래스형은 render만 다시 실행되고 함수형의 경우는 함수형 컴포넌트 선언 전체가 다시 실행되어 속도면에서 더 느릴 수 있다.

## React Hooks
- 함수형 컴포넌트에서도 setState, ref 를 동일하게 사용할 수 있다.
```
const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9)); 
setFirst(Math.ceil(Math.random() * 9)) === setState({first: Math.ceil(Math.random() * 9)});

const inputRef = React.useRef(null); === (c) => {this.input = c;}
inputRef.current.focus() === this.input.focus();

setResult((prevResult) => {
    return '정답' + value;
});
```

# Node.js
JavaScript로 브라우저 밖에서 서버를 구축하는 등의 코드를 실행할 수 있게 해주는 런타임 환경이다.

## NPM
Node Package Manager(혹은 Node Package Module)의 줄임말로써 Node.js의 패키지를 관리할 수 있는 도구이다. 또한 npm을 사용하여 패키지를 공유하는 온라인 패키지 저장소의 이름이기도 하다.

## package.json
패키지 관련 정보들을 확인할 수 있는 파일
```
npm init (package.json 생성)
npm i 설치할 패키지 네임 
npm i 설치할 패키지 네임 설치할 패키지 네임 (여러개를 설치할 경우) 
npm i -D 설치할 패키지 네임 (개발에서만 사용할 경우)

npm i react react-dom
```


# WEBPACK
규모가 큰 프로젝트의 경우 컴포넌트를 수백,수천개를 만들게 되면서 스크립트파일이 그만큼 많아지게 때문에 중복이 생길 수도 있고 유지보수에 어려움이 생기게 됩니다. 이 수많은 파일들을 하나의 파일로 만들어 주며 중복, 불필요한 코드들까지 제거해주는 것이 웹팩입니다. 
```
웹팩 설치
npm i webpack webpack-cli

웹팩 설정
const path = require('path'); // node path로 경로를 설정하기 편하게 도와준다.

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['js', 'jsx']
    }, // 파일 확장자를 설정
    entry: {
        app: ['./client'] // client 안에서 불러오는 컴포넌트들은 따로 입력하지 않아도 웹팩에서 다 불러와 준다.
    }, // 입력
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                preset: ['@babel/preset-env', '@babel/preset-react'],
            },
        }],
    }, // 입력된 파일을 모듈을 거쳐 변환을 시키고 출력
    output: {
        path: path.join(__dirname, 'dist'), // __dirname : 현재 폴더
        filename: 'app.js',
    }, // 출력 
}

웹팩 실행
- npx webpack
- package.json 내에 scripts 부분에 아래 코드 추가
"scripts": {
    "dev": "webpack"
},
```
기본 설정 후 웹팩을 실행하면 app.js 가 생성되고 에러가 발생하게 됩니다. jsx 파일을 웹팩에서 해석하지 못하기 때문에 바벨을 설치하고 설정을 추가해 줘야 합니다.
```
바벨 설치
npm i -D @babel/core // 기본 바벨 문법
npm i -D @babel/preset-env // 사용자 환경에 맞게 변경해주는 것
npm i -D @babel/preset-react // 리액트 jsx 변경 해주는 것
npm i -D babel-loader // 바벨과 웹팩을 연결해주는 것

preset : plugin들의 모임
```
모듈을 좀 더 구체적으로 작성해 필요한 작업들만 적용 시킬 수 있습니다. preset-env의 경우 사용자 환경에 맞게 크로스 브라우징을 시켜주는 preset 으로 target에 browsers 를 지정할 경우 해당되는 브라우저까지만 동작되도록 변환 시켜줍니다.
```
module: {
    rules: [{
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
            presets: [['@babel/preset-env', {
                targets: {
                    browsers: ['> 5% in KR'],
                },
                debug: true,
            }], '@babel/preset-react'],
            plugins: [],
        },
    }],
},
```

## 웹팩데브서버와 핫리로딩
```
$ npm i -D webpack-dev-server
$ npm i react-refresh @pmmmwh/react-refresh-webpack-plugin -D

packages.json 파일 수정
"scripts": {
    "dev": "webpack serve --env development"
},

webpack.config.js 파일 수정
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

bable-loader options에 추가
plugins: [
    'react-refresh/babel'
],

plugins: [
    new RefreshWebpackPlugin()
],

devServer: {
    publicPath: '/dist/',
    hot: true,
},

```
웹팩데브서버는 빌드의 결과물을 돌리고 dist 서버에 보관한 후 변경점이 생길때 마다 새로고침을 해줍니다.   
핫리로딩은 새로고침 시 데이터를 유지해줍니다.

## import와 require 비교
둘은 모두 모듈 키워드로 파일을 불러 올 때 사용합니다. require는 node.js 에서 사용되는 CommonJs 키워드이고, import는 ES2015에 도입된 키워드입니다. babel을 사용할 경우 import 키워드를 require로 변환 시켜주기 때문에 사용할 수 있지만 babel 을 사용하지 못하는 곳에서는 require 키워드를 사용해야 합니다.   
ex:) webpack.config.js

## 리액트 반복문(key)
리액트에서 반복문을 사용할 경우 요소에 key값을 추가해줘야 합니다. 리액트는 key 값을 통해 컴포넌트를 구분하기 때문에 key 값은 고유값으로 지정해줘야 합니다. 키값을 index로 사용할 경우 추가 하거나 수정 삭제를 하는 경우도 key 값을 가지고 판단하기 때문에 배열의 순서가 바뀌면 문제가 생길 수 있어 index 값을 사용하지 않아야 한다. 추가만 하는 경우에는 사용해도 괜찮다.

## 주석
```
{/* 쏼라쏼라 */}
```
