-   state 是状态数据
-   Action 就是一个普通的 Javascript 对象
-   reducer 是把 action 和 state 串起来，接收 state 和 action，并返回新的 state 函数

# Redux 三大原则

1. 单一数据源
    - 整个应用的`state`被存储在一棵 object tree 中，并且这个 object tree 只存在于唯一一个`store`中
2. State 是只读的
    - 唯一改变`state`的方法就是触发`action`,action 是一个用于描述已发生事件的普通对象。
3. 使用纯函数来执行修改
    - 为了描述 action 如何改变 state tree,你需要编写`reducers`

# redux 中的 API

1. createStore()
    - 创建一个 store 对象，接收 reducer 函数
2. combineReducers()
    - 把多个 reducer 函数合并成一个大对象，每个对象中存放的就是每个 reducer 函数
3. applyMiddleware()
    * 将所有的中间件组成一个数组，依次执行。
    * 源码
    ```js
    export default function applyMiddleware(...middlewares) {
        return (createStore) => (reducer, preloadedState, enhancer) => {
            var store = createStore(reducer, preloadedState, enhancer);
            var dispatch = store.dispatch;
            var chain = [];

            var middlewareAPI = {
            getState: store.getState,
            dispatch: (action) => dispatch(action)
            };
            chain = middlewares.map(middleware => middleware(middlewareAPI));
            dispatch = compose(...chain)(store.dispatch);

            return {...store, dispatch}
        }
    }
    ```
    > 上面代码中，所有中间件被放进了一个数组chain,然后嵌套执行，最后执行`store.dispatch`。可以看到，中间件内部(middlewareAPI)可以拿到`getState`和`dispatch`这两个方法

# redux-actions 中的 API

1.  handleActions()

        - 创建 reducer,接收两个参数，参数 1 是接收一个函数，这个函数有一个唯一的 Key,并且这个函数接收一个 state 和 action,返回一个新的 state,参数 2 是默认的 state 数据

        * 代码

        ```js
        import {
        handleActions

        } from 'redux-actions';
        export const commonState = handleActions({
        SET_COLOR_STATE: (state, action) => ({
            ...state,
            themeColor: action.payload
            })
            }, {
            themeColor: 'red'
        })
        ```

2.  createAction()

    -   创建 Action

    *   代码

    ```js
    import { createAction } from "redux-actions";
    import type from "./actionType";
    export const setCommonState = createAction(type.SET_COLOR_STATE);
    ```

# redux-thunk 中的 API
1. 介绍
    * 使用`redux-thunk`中间件，改造`store.dispatch`,使得后者可以接收函数作为参数
2. 代码
```js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
```
3. creator action
```js
// 异步调用执行
function getColor() {
    return 'blue'
}
export const getCommonState = () => async dispatch => {
    let data = await getColor();
    dispatch(setCommonState(data))
}
```
# react-redux中的API
> `react-redux`将所有组件分成两大类：UI组件(presentational component)和容器组件(container component)
1. UI组件的特征
    * 只负责UI的呈现，不带有任何业务逻辑
    * 没有状态（即不使用this.state这个变量）
    * 所有数据都有参数(this.props)提供
    * 不使用任何`Redux`的API
2. 容器组件的特征
    * 负责管理数据和业务逻辑，不负责UI的呈现
    * 带有内部状态
    * 使用Redux的API
3. connect()
> 用于从UI组件生成容器组件,接收两个参数：`mapStateToProps`和`mapDispatchToProps`,前者负责输入逻辑，即将state映射到UI组件的参数(props),后者负责输出逻辑，即将用户对UI组件的操作映射成Action
```js
import {connect} from 'react-redux';
import Content from '../component/Content';
import * as actions from '../store/actions';
// `mapStateToProps`是一个函数。它的作用就是像它的名字那样，建立一个从（外部的）state对象到（UI 组件的）props对象的映射关系。返回一个对象
const mapStateToProps = (state, ownProps) => {
    return {
        themeColor: state.commonState.themeColor
    }
}
// `mapDispatchToProps`是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
// 如果是函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeColor: (color) => {
            dispatch(actions.setCommonState(color))
        }
    }
}
// 如果是对象，它的每个键名也是对应 UI 组件的同名参数，键值应该是一个函数，会被当作 Action creator ，返回的 Action 会由 Redux 自动发出。
const mapDispatchToProps = {
    changeColor:(color)=> {
        actions.setCommonState(color)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
```
4. <Provider>组件
> 提供state
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {store} from './store/createStore';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

```

