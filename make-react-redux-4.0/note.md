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