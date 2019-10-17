import {
    handleActions
} from 'redux-actions';
export const commonstate = handleActions({
    'SET_THEME_COLOR': (state, action) => ({
        ...state,
        themeColor: action.payload
    })
}, {
    themeColor: 'red'
})