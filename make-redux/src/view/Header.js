import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Header extends Component {
    // 对于Context的消费者：
    // 通过一个静态属性ContextTypes声明之后，才能访问父组件Context对象的属性，否则，即使属性名没写错，拿到的对象也是undefined
    static contextTypes = {
        store: PropTypes.object
    }

    constructor () {
        super();
        this.state = {themeColor: ''}
    }
    componentWillMount () {
        const {store} = this.context;
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
    }
    _updateThemeColor() {
        const {store} = this.context;
        const state = store.getState();
        this.setState({themeColor: state.themeColor})
    }
    render() {
        return (
            <div>
                <h1 style={{color: this.state.themeColor}}>React小书</h1>
            </div>
        );
    }
}

export default Header;