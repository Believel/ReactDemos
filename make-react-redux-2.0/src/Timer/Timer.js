import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds : 0
        };
    }
    tick() {
        this.setState({
            seconds : this.state.seconds + 1
        });
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.intervel = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervel)
    }

    render() {
        return (
            <div>
                <h1>Hello, world</h1>
                <h1>It is {new Date().toLocaleTimeString()}</h1>
                seconds: {this.state.seconds}
            </div>
        );
    }
}

Timer.propTypes = {

};

export default Timer;