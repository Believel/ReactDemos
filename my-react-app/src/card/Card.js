import React, { Component } from 'react';

class Card extends Component {
    render() {
        console.log(this.props.children)
        return (
            <div className="card">
                <div className="card-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;