const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
    const [word, setWord] = useState({ word: '베어진' });
    const [value, setValue] = useState({ value: '' });
    const [result, setResult] = useState({ result: '' });
    const inputRef = useRef((c) => { this.input = c; });

    onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult({ result: '딩동댕' });
            setWord({ word: value });
            setValue({ value: '' });
        } else {
            setResult({ result: '땡' });
            setValue({ value: '' });
        }
        inputRef.focus();
    };

    onChangeInput = (e) => {
        setValue({ value: e.target.value });
    };
    return (
        <>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value}></input>
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
}

module.exports = WordRelay;