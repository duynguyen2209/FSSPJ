import { LOG_IN, LOG_OUT, SWITCH_THEME,CHANGE_LANG } from '../../const/index'
const initialSate = {
    Login: {
        isLogin: false
    },
    Theme: {
        themeMode: 'dark'
    },
    Lang:{
        langis:'vie'
    }

}




const Reducer = (state = initialSate, action) => {
    console.log(state, action);
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                Login: {
                    ...state.Login,
                    isLogin: action.payload,
                }
            }
        case LOG_OUT:
            return {
                ...state,
                Login: {
                    ...state.Login,
                    isLogin: action.payload,
                }
            }
        case SWITCH_THEME:
            return {
                ...state,
                Theme: {
                    ...state.Theme,
                    themeMode: action.payload
                }
            }
        case CHANGE_LANG:
            return{
                ...state,
                Lang:{
                    ...state,
                    langis:action.payload
                }
            }
        default:
            return state;
    }
}

export default Reducer;


