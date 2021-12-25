import React, {useReducer} from 'react';

import HeaderReducer from "./HeaderReducer";
import HeaderContext from './HeaderContext';
import {CHANGE_COLOR,
        CHANGE_THEME } from '../Types';

const HeaderProvider = (props) => {

    // 1. Set up an object of GLOBAL STATE VARIABLES
    const initialState = {
        color: '#58249c', // a different to the palette
        theme: 'light'
      }

    // 2. Bind the global state variables to the useReducer
      const [state, dispatch] = useReducer(HeaderReducer, initialState);

    // 3. Set up f() that expose state management to the app components  
    const changeColor = (color) => {
        dispatch({type: CHANGE_COLOR, payload: color})
    }

    const changeBackgroundTheme = () => {
        dispatch({type: CHANGE_THEME })
    }

    // 4. return the context's provider, which will be wrapped around the app component
    return (
        <HeaderContext.Provider value={{...state, changeColor, changeBackgroundTheme}} >
            {props.children}
        </HeaderContext.Provider>
    )


}

export default HeaderProvider;