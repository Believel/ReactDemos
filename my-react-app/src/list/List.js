import React, { Component } from 'react';

class List extends Component {
    render() {
        const {user} = this.props;
        return (  
            <div>
                <div>姓名： {user.username}</div>
                <div>年龄： {user.age}</div>
                <div>性别： {user.gender}</div>
                <hr/>
            </div>          
        );
    }
}

export default List;