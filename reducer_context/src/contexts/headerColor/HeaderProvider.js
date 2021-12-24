import React, {useReducer} from 'react';

import HeaderReducer from "./HeaderReducer";
import HeaderContext from './HeaderContext';
import {CHANGE_COLOR,
        CHANGE_THEME } from '../Types';

const HeaderProvider = (props) => {

    const initialState = {
        color: '#58249c',
        theme: 'light'
      }

    const [state, dispatch] = useReducer(HeaderReducer, initialState);

    const changeColor = (color) => {
        dispatch({type: CHANGE_COLOR, payload: color})
    }

    const changeBackgroundTheme = () => {
        dispatch({type: CHANGE_THEME })
    }


    return (
        <HeaderContext.Provider value={{...state, changeColor, changeBackgroundTheme}} >
            {props.children}
        </HeaderContext.Provider>
    )


}

export default HeaderProvider;