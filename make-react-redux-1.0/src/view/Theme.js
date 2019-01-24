import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Theme extends Component {
    static contextTypes = {
        store: PropTypes.object
      }
    
      constructor () {
        super()
        this.state = { themeColor: '' }
      }
    
      componentWillMount () {
          const {store} = this.context;
        this._updateThemeColor()
        store.subscribe(() => this._updateThemeColor())
      }
    
      _updateThemeColor () {
        const { store } = this.context
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
      }
      handleSwitchColor (color) {
          const {store} = this.context;
          store.dispatch({
              type: 'CHANGE_COLOR',
              themeColor: color
          })
      }
    render() {
        return (
            <div>
                <button onClick={this.handleSwitchColor.bind(this, 'red')}  style={{ color: this.state.themeColor }}>Red</button>
                <button onClick={this.handleSwitchColor.bind(this, 'blue')} style={{ color: this.state.themeColor }}>Blue</button>
            </div>
        );
    }
}

export default Theme;