import {CHANGE_COLOR,
        CHANGE_THEME} from '../Types';


// the state is an obj = {color, theme}, which is passed to the reducer as an initialState from the Provider 

const HeaderReducer = (state, action) => {
    switch(action.type){
        case CHANGE_COLOR:
            return {...state, color: action.payload};
        case CHANGE_THEME:
            return {...state, theme: state.theme === 'light'? 'dark' : 'light'}
        default:
            return state ;   
    }
}

export default HeaderReducer;


