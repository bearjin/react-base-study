import React, { Component } from 'react';
import Try from './Try';

function getNumbers() {

}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: [],
    };

    onSubmitFrom = () => {

    };

    onChageInput = () => {

    };

    fruits = [
        { fruit: '사과', taste: '맛있다' },
        { fruit: '바나나', taste: '맛없다' },
        { fruit: '배', taste: '달다' },
        { fruit: '자몽', taste: '쓰다' },
        { fruit: '귤', taste: '달다' },
        { fruit: '자두', taste: '시다' },
        { fruit: '복숭아', taste: '맛있다' },
    ]

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitFrom}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChageInput} />
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v, i) => {
                        return (
                            <Try key={v.fruit + v.taste} item={v} index={i} />
                        );
                    })}
                </ul>
            </>
        );
    }
}

export default NumberBaseball;