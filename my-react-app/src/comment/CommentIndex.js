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
    componentWillMount() {
        this._loadComments()
    }
    // 加载评论列表
    _loadComments() {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments);
            this.setState({comments})
        }
    }
    // 保存评论列表怕
    _saveComments(comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }
    // 接收子组件中的变量，使用方法
    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        let comments = this.state.comments
        comments.push(comment)
        this.setState({
            comments
        })
        this._saveComments(comments)
    }
    handleDeleteComment(index) {
        console.log(index)
        let comments = this.state.comments;
        comments.splice(index, 1)
        this.setState({
            comments
        })
        this._saveComments(comments)
    }
    render() {
        return (
            <div>
                {/* 用户输入区域 */}
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>

                {/* 评论列表 */}
                <CommentList comments = {this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        );
    }
}

export default CommentIndex;