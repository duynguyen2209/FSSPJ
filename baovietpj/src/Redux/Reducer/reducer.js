import { LOG_IN, LOG_OUT, SWITCH_THEME,CHANGE_LANG,GET_USER, GET_USER_NAME } from '../../const/index'
const initialSate = {
    Login: {
        isLogin: false,
        usernumber:'',
        username:''
    },
    Theme: {
        themeMode: 'dark'
    },
    Lang:{
        langis:'vie'
    }

}

const Reducer = (state = initialSate, action) => {
    // console.log(state, action);
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                Login: {
                    ...state.Login,
                    isLogin: action.payload,
                }
            }
        
        case GET_USER:{
            return{
                ...state,   
                Login: {
                    ...state.Login,
                    usernumber:action.payload
                }
            }
        }

        case GET_USER_NAME:{
            return{
                ...state,
                Login:{
                    ...state.Login,
                    username:action.payload
                }
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
                Lang: {
                    ...state.Lang,
                    langis: action.payload
                }
            }
        default:
            return state;
    }
}

export default Reducer;


