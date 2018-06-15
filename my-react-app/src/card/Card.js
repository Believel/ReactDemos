import React, { Component } from 'react';


class Card extends Component {
    constructor() {
        super()
        this.state = {
            content: '<div>哈哈</div>',
            color: 'red'
        }
    }
    render() {
        console.log(this.props.children)
        return (
            <div className="card">
                <div className="card-content">
                    {this.props.children}
                </div>
                {/* 考虑到XSS攻击，被自动转义 */}
                <p>{this.state.content}</p>

                {/* 这个属性不必要的情况就不要使用 */}
                <p  dangerouslySetInnerHTML={{__html: this.state.content}}></p>

                {/* style属性的使用： 变成一个对象再传给元素 */}
                <h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>
            </div>
        );
    }
}

export default Card;