import React, {Component} from 'react';
class Title extends Component {
    handleClickOnTitle(word, e) {
        console.log('Click on Title');
        console.log(e.target);
        console.log(this);// undefined
        console.log(word);
    }
    render() {
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this, 'hello')}>React 小书</h1>
        )
    }
}

export default Title