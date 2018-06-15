import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 单个评论项组件
import Comment from './Comment';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    static defaultProps = {
        comments: []
    }
    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) => {
                    return (
                        <Comment key={i} comment={comment} onDeleteComment={this.handleDeleteComment.bind(this, i)}/> 
                    )
                })}
            </div>
        );
    }
}

export default CommentList;