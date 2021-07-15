# 리액트를 왜 쓰는가? 
- 사용자 경험이 좋아진다. 싱글페이지어플리케이션(SPA) : 일반적인 웹사이트과 다른 페이지 전환없이 앱처럼 동작하도록 구현
- 데이터와 화면을 일치 시키는데 어려움이 있는데 리액트를 사용해 데이터 처리를 쉽게 할 수 있다(사용자 선택에 따른 변경 되는 부분 예: 좋아요, 댓글 등등)
- 중복되는 요소를 컴포넌트화 시켜서 쉽게 적용할 수 있고 유지 보수에도 유리하다.

# Babel
JavaScript 엔진에서 실행할 수 있는 이전 버전과 호환되는 JavaScript 버전으로 변환하는 데 주로 사용되는 무료 오픈 소스 JavaScript 트랜스컴파일러로 JavaScript 최신 문법을 사용할 수 있게 해줍니다.
```
<div id="output"></div>
<script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
<script type="text/babel">
    const getMessage = () => "Hello World";
    document.getElementById('output').innerHTML = getMessage();
</script>
```

# JSX ( JS + XML )

# Method
함수를 메소드화 시키는 이유는 렌더링 될 때 마다 함수를 매번 재선언하지 않아 불필요한 메모리 낭비를 막을 수 있다.

# this
```
onChange = function(e) {{this.setState({value: e.target.value})}} 오류

onChange = function(e) {{this.setState({value: e.target.value})}}.bind(this) 정상
```
컴포넌트에서 화살표 함수를 사용하지 않고 함수를 선언할 경우 this는 컴포넌트 본인을 가리키지 못하고 다른 객체를 가리키게 되기 때문에 this를 bind 시켜줘야 합니다.
```
onChange = (e) => {{this.setState({value: e.target.value})}}
```
화살표 함수는 this를 컴포넌트 본인을 가르켜 주기 때문에 this를 bind 시켜주지 않아도 정상적으로 작동이 됩니다.

# setState
```
this.setState((prevState) => {
    return {
        value: prevState.value + 1;
    };
});
```
- setState는 비동기이기 때문에 예전 state 값을 이용해 새로운 state 값을 만들때는 prevState를 이용해줘야 한다. setState 안에서 this.state를 사용할 경우   
- setState로 state 의 값이 변하는 경우 렌더링 이루어 진다.

# ref
```
input; 

ref={(c) => {this.input = c;}}

this.input.focus();
```
document.querySelector(태그)를 사용하지 않고 태그에 ref를 선언하여 사용할 수 있다.