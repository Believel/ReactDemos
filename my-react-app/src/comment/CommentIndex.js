import React, { Component } from 'react';
import './comment.css'

// 操作框组件：输入框，按钮
import CommentInput from './CommentInput';

// 评论列表组件
import CommentList from './CommentList';
class CommentIndex extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    // 接收子组件中的变量，使用方法
    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }
    render() {
        return (
            <div>
                {/* 用户输入区域 */}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>

                {/* 评论列表 */}
                <CommentList comments = {this.state.comments}/>
            </div>
        );
    }
}

export default CommentIndex;