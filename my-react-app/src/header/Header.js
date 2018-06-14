import React, { Component } from 'react';

class Header extends Component {
    constructor() {
        super()
        console.log('construct');
    }
    componentWillMount() {
        console.log('component will mount')
    }
    componentDidMount() {
        console.log('component did mount')
    }
    render() {
        console.log('render');
        return (
            <div>
                <h1 className="title">React小书</h1>
            </div>
        );
    }
}

export default Header;