import React, { Component } from 'react';

class AutoFocusInput  extends Component {
    componentDidMount(){
        this.input.focus()
    }

    // 注意：能不用 ref 就不用。
    render() {
        return (
            <div>
              <input ref={(input) =>this.input = input}/>  
            </div>
        );
    }
}

export default AutoFocusInput ;