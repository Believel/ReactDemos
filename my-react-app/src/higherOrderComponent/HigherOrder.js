import React, { Component } from 'react';

export default (WrappedComponent, name) => {
    class newComponent extends Component {
        constructor() {
            super();
            this.state = {data: null}
        }
        componentWillMount() {
            let data = localStorage.getItem(name)
            this.setState({data})
        }
        // 可以做很多自定义逻辑
        render() {
            return <WrappedComponent data = {this.state.data}/>
        }
    }
    return newComponent

};