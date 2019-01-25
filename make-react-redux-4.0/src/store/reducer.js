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