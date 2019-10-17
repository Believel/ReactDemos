import React, { Component } from "react";
import PropTypes from "prop-types";
export class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    };
    static childContextTypes = {
        store: PropTypes.object
    };
    getChildContext() {
        return { store: this.props.store };
    }
    render() {
        return <div>{this.props.children}</div>;
    }
}
export const connenct = (
    mapStateToProps,
    mapDispatchToProps
) => WrapperComponent => {
    class Connnect extends Component {
        static contextTypes = {
            store: PropTypes.object
        };
        constructor() {
            super();
            this.state = {
                allProps: {}
            };
        }
        componentDidMount() {
            const { store } = this.context;
            this.updateProps();
            store.subcribe(() => this.updateProps());
        }
        updateProps() {
            const { store } = this.context;
            const stateProps = mapStateToProps
                ? mapStateToProps(store.getState(), this.props)
                : {};
            const dispatchProps = mapDispatchToProps
                ? mapDispatchToProps(store.dispatch, this.props)
                : {};
            this.setState({
                // 整合普通的props和从state生成的props
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            });
        }
        render() {
            return <WrapperComponent {...this.state.allProps} />;
        }
    }
    return Connnect;
};
