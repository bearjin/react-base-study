# 리액트를 왜 쓰는가? 
- 사용자 경험이 좋아진다. 싱글페이지어플리케이션(SPA): 일반적인 웹사이트과 다른 페이지 전환없이 앱처럼 동작하도록 구현
- 데이터와 화면을 일치 시키는데 어려움이 있는데 리액트를 사용해 데이터 처리를 쉽게 할 수 있다(사용자 선택에 따른 변경 되는 부분 예: 좋아요, 댓글 등등)
- 중복되는 요소를 컴포넌트화 시켜서 쉽게 적용할 수 있고 유지 보수에도 유리하다.

## Babel
- JavaScript 엔진에서 실행할 수 있는 이전 버전과 호환되는 JavaScript 버전으로 변환하는 데 주로 사용되는 무료 오픈 소스 JavaScript 트랜스컴파일러로 JavaScript 최신 문법을 사용할 수 있게 해줍니다.
```html
<div id="output"></div>
<script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
<script type="text/babel">
  const getMessage = () => "Hello World";
  document.getElementById('output').innerHTML = getMessage();
</script>
```

## JSX ( JS + XML )

## Method
- 함수를 메소드화 시키는 이유는 렌더링 될 때 마다 함수를 매번 재선언하지 않아 불필요한 메모리 낭비를 막을 수 있다.

## this
- 컴포넌트에서 화살표 함수를 사용하지 않고 함수를 선언할 경우 this는 컴포넌트 본인을 가리키지 못하고 다른 객체를 가리키게 되기 때문에 this를 bind 시켜줘야 합니다.
```javascript
onChange = function(e) {{this.setState({value: e.target.value})}} 오류

onChange = function(e) {{this.setState({value: e.target.value})}}.bind(this) 정상
```

- 화살표 함수는 this를 컴포넌트 본인을 가르켜 주기 때문에 this를 bind 시켜주지 않아도 정상적으로 작동이 됩니다.
```javascript
onChange = (e) => {{this.setState({value: e.target.value})}}
```

## setState
- setState는 비동기이기 때문에 예전 state 값을 이용해 새로운 state 값을 만들때는 prevState를 이용해줘야 한다. setState 안에서 this.state를 사용할 경우   
- setState로 state 의 값이 변하는 경우 렌더링 이루어 진다.
- 여러개의 state가 같이 수정 되는 경우에 state가 수정된 만큼 렌더링이 일어날것 같지만 실제 렌더링은 한번만 이루어진다. React가 setState를 한번에 모아서 처리하기 때문에
```javascript
this.setState((prevState) => {
  return {
    value: prevState.value + 1;
  };
});
```

## ref
- document.querySelector(태그)를 사용하지 않고 태그에 ref를 선언하여 사용할 수 있다.
```javascript
input; 

ref={(c) => {this.input = c;}}

this.input.focus();
```

## Function Component(함수형 컴포넌트)
- setState, ref 를 사용하지 못한다. 두가지는 클래스형 컴포넌트에서 사용 가능
- state가 변할 경우 클래스형 컴포넌트와 똑같이 렌더링이 이루어 진다. 다른점은 클래스형은 render만 다시 실행되고 함수형의 경우는 함수형 컴포넌트 선언 전체가 다시 실행되어 속도면에서 더 느릴 수 있다.

## React Hooks
- 함수형 컴포넌트에서도 setState, ref 를 동일하게 사용할 수 있다.
```javascript
const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9)); 
setFirst(Math.ceil(Math.random() * 9)) === setState({first: Math.ceil(Math.random() * 9)});

const inputRef = React.useRef(null); === (c) => {this.input = c;}
inputRef.current.focus() === this.input.focus();

setResult((prevResult) => {
  return '정답' + value;
});
```

# Node.js
- JavaScript로 브라우저 밖에서 서버를 구축하는 등의 코드를 실행할 수 있게 해주는 런타임 환경이다.

## NPM
- Node Package Manager(혹은 Node Package Module)의 줄임말로써 Node.js의 패키지를 관리할 수 있는 도구이다.
- npm을 사용하여 패키지를 공유하는 온라인 패키지 저장소의 이름이기도 하다.

## package.json
- 패키지 관련 정보들을 확인할 수 있는 파일
```javascript
npm init (package.json 생성)
npm i 설치할 패키지 네임 
npm i 설치할 패키지 네임 설치할 패키지 네임 (여러개를 설치할 경우) 
npm i -D 설치할 패키지 네임 (개발에서만 사용할 경우)

npm i react react-dom
```


# WEBPACK
- 규모가 큰 프로젝트의 경우 컴포넌트를 수백,수천개를 만들게 되면서 스크립트파일이 그만큼 많아지게 때문에 중복이 생길 수도 있고 유지보수에 어려움이 생기게 됩니다. 이 수많은 파일들을 하나의 파일로 만들어 주며 중복, 불필요한 코드들까지 제거해주는 것이 웹팩입니다. 
```javascript
웹팩 설치
npm i webpack webpack-cli

웹팩 설정
const path = require('path'); // node path로 경로를 설정하기 편하게 도와준다.

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', // 실서비스 : production
  devtool: 'eval',
  resolve: {
    extensions: ['js', 'jsx'],
  }, // 파일 확장자를 설정
  entry: {
    app: ['./client'], // client 안에서 불러오는 컴포넌트들은 따로 입력하지 않아도 웹팩에서 다 불러와 준다.
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
  "dev": "webpack",
},
```

- 기본 설정 후 웹팩을 실행하면 app.js 가 생성되고 에러가 발생하게 됩니다. jsx 파일을 웹팩에서 해석하지 못하기 때문에 바벨을 설치하고 설정을 추가해 줘야 합니다.
```javascript
바벨 설치
npm i -D @babel/core // 기본 바벨 문법
npm i -D @babel/preset-env // 사용자 환경에 맞게 변경해주는 것
npm i -D @babel/preset-react // 리액트 jsx 변경 해주는 것
npm i -D babel-loader // 바벨과 웹팩을 연결해주는 것

preset : plugin들의 모임
```
모듈을 좀 더 구체적으로 작성해 필요한 작업들만 적용 시킬 수 있습니다. preset-env의 경우 사용자 환경에 맞게 크로스 브라우징을 시켜주는 preset 으로 target에 browsers 를 지정할 경우 해당되는 브라우저까지만 동작되도록 변환 시켜줍니다.
```javascript
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
- 웹팩데브서버는 빌드의 결과물을 돌리고 dist 서버에 보관한 후 변경점이 생길때 마다 새로고침을 해줍니다.   
- 핫리로딩은 새로고침 시 데이터를 유지해줍니다.
```javascript
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

# import와 require 비교
- 둘은 모두 모듈 키워드로 파일을 불러 올 때 사용합니다. 
- require는 node.js 에서 사용되는 CommonJs 키워드이고, import는 ES2015에 도입된 키워드입니다. 
- babel을 사용할 경우 import 키워드를 require로 변환 시켜주기 때문에 사용할 수 있지만 babel 을 사용하지 못하는 곳에서는 require 키워드를 사용해야 합니다. ex:) webpack.config.js

# 리액트 반복문(key)
- 리액트에서 반복문을 사용할 경우 요소에 key값을 추가해줘야 합니다. 
- 리액트는 key 값을 통해 컴포넌트를 구분하기 때문에 key 값은 고유값으로 지정해줘야 합니다. 
- 키값을 index로 사용할 경우 추가 하거나 수정 삭제를 하는 경우도 key 값을 가지고 판단하기 때문에 배열의 순서가 바뀌면 문제가 생길 수 있어 index 값을 사용하지 않아야 한다. 추가만 하는 경우에는 사용해도 괜찮다.

# 주석
```javascript
{/* 쏼라쏼라 */}
```

# 구조분해할당
[구조분해할당 MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
```javascript
const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest); // 10, 20, [30, 40, 50]

const { value, answer, tries} = this.state; // this.state를 생략해 작성 할 수 있다.
```

# 리액트 렌더링 방지하기
- shouldComponentUpdate()를 사용해 새로운 state값과 현재 state값을 비교해 같을 경우 true, 다를 경우 false 를 리턴하여 렌더링을 방지 합니다.
- PureComponent 는 shouldComponentUpdate 에서 state 값을 비교하는 것을 리액트가 알아서 해주는 컴포넌트입니다. 
- 함수형 컴포넌트에서는 React.memo를 통해 PureComponent 처럼 사용할 수 있습니다.
```javascript
shouldComponentUpdate(nextProps, nextState, nextContext) {
  if (this.state.counter !== nextState.counter) {
    return true;
  }
  return false;
}
```
```javascript
import React, { PureComponent } from 'react';

class Pure extends PureComponent {

}
export default Pure;
```
```javascript
import React, { memo } from 'react';

const Try = memo(() => {
  return (
    
  );
});
```

# 배열 & 객체
- 리액트는 배열에 값을 추가할 경우 push()를 사용하지 않고 새로운 배열을 만들어 값을 추가해야 합니다. 
- 리액트는 참조가 바뀌어야 값이 변경된걸 알고 렌더링이 일어나기 때문입니다. 객체도 배열과 마찬가지로 새로운 객체를 만들어 리액트가 변경 되었다는것을 알아차릴수 있도록 해줘야 합니다.
- 배열과 객체의 구조는 간단한 구조로 만드는것이 좋다.
```javascript
const arr = [];

arr.push(1); // no
arr === arr // true
const arr2 = [...arr, 1]; // okay
arr === arr2 // false
```

# creatRef
- class 컴포넌트에서도 createRef를 이용하여 useRef 와 같은 문법으로 사용할 수 있습니다.
```javascript
import React, { Component, createRef } from 'react';

inputRef = createRef();
this.inputRef.current.focus();

// 다른동작들을 추가해서 하고 싶을때는 예전 방식을 사용
inputRef;
onInputRef = (c) => {
  console.log('test');
  this.inputRef = c;
}
```

# props와 state 연결
- 자식이 받아온 props를 변경해서는 안된다. props를 변경하고 싶으면 부모의 props를 변경하거나 부모의 props를 state로 만들어서 변경해줘야 합니다.

# 라이프사이클
- constructor -> render -> ref -> componentDidMount
- setState/props 바뀔 때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate
- 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸
```javascript
// 컴포넌트가 첫 렌더링된 후, 여기에 비동기 요청을 많이 함
componentDidMount() {}

// 리렌더링 후
componentDidUpdate() {}

// 컴포넌트가 제거되기 직전, 비동기 요청 정리를 많이 함
componentWillUnmount() {}
```

# useEffect
- 두번째 인수 배열에 아무런 값이 없는 경우는 componentDidMount 와 동일
- 두번째 인수 배열에 값을 넣는 경우 componentDidMount와 componentDidUpdate 둘 다 수행
- componentWillUnmount가 필요없을 경우 return 생략 가능
```javascript
useEffect(() => { 
  componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
  return () => { 
    componentWillUnmount 역할
  }
}, []);
```
- 아래 예시 패턴을 통해 componentDidUpdate만 실행할 수도 있습니다.
```javascript 
const mounted = useRef(false);
useEffect(() => {
  if (!mounted.current) {
    mounted.current = true;
  } else {
    // ajax
  }
}, [바뀌는값]); // componentDidMount 실행하지 않고 componentDidUpdate만 실행하기 
```

# useMemo
- Hooks는 함수형 컴포넌트를 렌더링 될 때 함수 전체가 다시 실행 되기 때문에 복잡한 함수일 경우 그만큼 실행하는데 오래 걸리게 되어 useMemo를 사용해 함수의 결과값을 기억해두어 사용합니다.
- 두번째 인자 배열에 넣은 값이 변하기 전까지 값을 기억합니다.
```javascript
const lottoNumbers = useMemo(() => getWinNumbers(), []);
```

# useCallback
- useMemo는 값을 기억하고 useCallback은 함수 자체를 기억합니다. 
- 컴포넌트 안에서 함수를 선언할 때 함수의 코드가 길 경우 선언에도 많은 시간이 걸리기 때문에 useCallback 를 사용해 함수 선언을 기억하여 재선언 하지 않는다.
- useCallback 안에서 state를 이용할 경우 두번째 인수 배열에 이용할 state를 입력해 줘야 합니다. 입력하지 않을 경우 함수 선언 당시의 state값을 기억해 현재의 state 값과 다릅니다.   
- 자식 컴포넌트에 props로 함수를 전달 할 경우 useCallback를 필수로 적용해야됩니다. 
```javascript
const onClickRedo = useCallback(() => {
  setWinNumbers(getWinNumbers());
  setWinBalls([]);
  setBonus(null);
  setRedo(false);
  timeouts.current = [];
}, [winNumbers]);

<Ball number={bonus} onClick={onClickRedo}/>
```

# Hooks에 대한 팁
- Hooks 시리즈들은 순서가 중요해 중간에 변경되면 안되기 때문에 조건문 안에 절대 넣으면 안되고 함수나 반복문 안에도 웬만하면 넣지 않도록 한다. 최상위에 선언하기

# useReducer
- useState를 사용해서 state를 여러개 선언할 경우 state들을 한번에 모와서 선언해줄 때 사용됩니다.
- dispatch로 액션을 취하고 reducer 안에서 액션 타입에 따른 동작을 동해 state를 변경해 줍니다. state 변경시에는 불변성을 항상 신경써야 합니다.
```javascript
const initialState = {
  winner: '',
  turn: 'O',
  tableData: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  recentCell: [-1, -1],
}; // state 모음

const reducer = (state, action) => {
  switch (action.type) {
    case SET_WINNER:
      // state.winner = action.winner; 이렇게 하면 안됨.
      return {
        ...state,
        winner: action.winner,
      };
    default:
      return state;
  }
}; // 액션 실행

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  dispatch({ type: SET_WINNER, winner: 'O' });
};
```

# 렌더링 디버깅 하기
- useEffect와 useRef를 사용해 렌더링에 대한 디버깅을 할 수 있습니다.
- 값이 false가 나오는 경우는 값이 변했다는것이고 그 값에 의해 렌더링이 발생하는 것을 알 수 있습니다.
```javascript
console.log('td rerendered');
const ref = useRef([]);
useEffect(() => {
  console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3]);
  ref.current = [rowIndex, cellIndex, dispatch, cellData];
}, [rowIndex, cellIndex, dispatch, cellData]);
```