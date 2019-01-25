import {
    createAction
} from 'redux-actions';
import type from './actionType';
export const setCommonState = createAction(type.SET_COLOR_STATE)

// 异步调用执行
// function getColor() {
//     return 'blue'
// }
// export const getCommonState = () => async dispatch => {
//     let data = await getColor();
//     dispatch(setCommonState(data))
// }