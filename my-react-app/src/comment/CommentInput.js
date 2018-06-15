import React, { Component } from 'react';

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
        // React.js 认为所有的状态都应该由 React.js 的 state 控制，
        // 只要类似于 <input />、<textarea />、<select /> 这样的输入控件被设置了 value 值，
        // 那么它们的值永远以被设置的值为准。值不变，value 就不会变化。
    }
   
    // 生命周期函数
    componentWillMount() {
        this._loadUsername()
    }
    componentDidMount() {
        this.textarea.focus();
    }
    // 私有方法
    _saveUsername(username) {
        localStorage.setItem('username', username)
    }
    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({username})
        }
    }
    // handle开头的方法
    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    handleUsernameBlur(e) {
        this._saveUsername(e.target.value)
    }
    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            const {username, content} = this.state;
            this.props.onSubmit({username, content, createdTime: +new Date()})
            this.setState({
                content: ''
            })
        }
    }
    // render()方法渲染
    render() {
        return (
            <div className="commmentinput">
                <div className="commentfiled">
                    <span className="commentfiledname">用户名：</span>
                    <div className="commentfiledinput">
                        <input value={this.state.username} onBlur={this.handleUsernameBlur.bind(this)} onChange={this.handleUsernameChange.bind(this)} name="username" className="username"/>
                    </div>
                </div>
                <div className="commentfiled">
                    <span className="commentfiledname">评论内容：</span>
                    <div className="commentfiledinput">
                        <textarea ref={(textarea) => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} name="content" className="username">
                        </textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        );
    }
}

export default CommentInput;