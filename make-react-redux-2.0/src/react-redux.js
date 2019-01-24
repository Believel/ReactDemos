import React, {Component} from 'react';
import PropTypes from 'prop-types';
// 说明：
// 1. connect接受两个参数mapStateToProps,mapDispatchToProps,然后返回一个函数，这个返回的函数是高阶组件。
// 2. 这个高阶组件会接受一个组件作为参数，然后用Connnect把组件包装以后再返回
// 3. mapStateToProps函数主要是接受l两个参数：参数1是store中所有state,参数2是通过prop传过来的值，返回的state
// 4. mapDispatchToProps函数主要接受两个参数：参数1是store中的dispatch方法，参数2是通过prop传过来的函数，返回dispatch
// 5. 最后这些值会当做传过来的组件的属性
export const connect = (mapStateToProps, mapDispatchToProps)=>(WrappedComponent)=> {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }
        constructor() {
            super()
            this.state = {allProps: {}}
        }
        componentWillMount() {
            const {store} = this.context;
            this._updateProps()
            store.subscribe(() => this._updateProps())
        }
        _updateProps() {
            const {store} = this.context;
            let stateProps =mapStateToProps? mapStateToProps(store.getState(),this.props):{}
            let dispatchProps = mapDispatchToProps? mapDispatchToProps(store.dispatch, this.props): {}
            this.setState({
                // 整合普通的props和从state生成的props
                allProps: {
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }
        render() {
            return (
                <WrappedComponent {...this.state.allProps}/>
            );
        }
    }
    
    return Connect
}

// Provider组件提供了store
export class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }
    // 生产者消费者模式
    // 通过静态属性childCOntextTypes声明提供给子组件的Context对象的属性，并实现一个实例getChildContext方法，返回一个代表Context的纯对象(plain object)
    static childContextTypes = {
        store: PropTypes.object
    }
    // 上下文：使用Context,可以跨越组件进行数据传递
    getChildContext() {
        return {
            store: this.props.store
        }
    }
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}