import React, {Component} from 'react'
class LikeButton extends Component {

    // 默认配置方式二
    static defaultProps = {
        likeText : '点赞',
        unlikeText: '取消'
    }
    constructor() {
        super()
        this.state = {
            isLiked : false,
            count: 0
        }
    }
    handleClickOnLikedButton() {
        this.setState({
            isLiked: !this.state.isLiked,
            count: 0
        })
        if (this.props.onClick) {
            this.props.onClick()
        }
    }
    render() {
        // const likeText = this.props.likeText || '点赞';
        // const unlikeText = this.props.unlikeText || '取消';


        // 默认配置方式一
        const wordings = this.props.wordings
        return (
            <button onClick={this.handleClickOnLikedButton.bind(this)}>
              {this.state.isLiked ? wordings.unlikeText: wordings.likeText}  👍
            </button>
        )
    }
}
export default LikeButton