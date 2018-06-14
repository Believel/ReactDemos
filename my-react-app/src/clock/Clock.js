import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date(),
            userData: ''
        }
    }
    componentWillMount() {
        // ajax数据的拉取操作、一些定时器的启动
        // ajax.get('http://json-api.com/user', (userData) => {
        //     this.setState({userData})
        // })

        // 定时器
        this.timer = setInterval(() => {
            this.setState({date: new Date()})
        }, 1000)
    }
    render() {
        return (
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        );
    }
    componentWillUnmount() {
        // 清除定时器
        clearInterval(this.timer)
    }
}

export default Clock;