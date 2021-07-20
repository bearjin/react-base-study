import React, { PureComponent } from 'react';

class RenderTest extends PureComponent {
    state = {
        counter: 0,
        string: 'hello',
        number: 1,
        boolean: true,
        object: {},
        array: [],
    }

    onClick = () => {
        this.setState({
            array: [...this.state.array, 5],
        })
    }

    render() {
        console.log('렌더링', this.state);
        return (
            <button onClick={this.onClick}>클릭</button>
        );
    }
}

export default RenderTest;