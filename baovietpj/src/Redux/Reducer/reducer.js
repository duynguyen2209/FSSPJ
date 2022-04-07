import { LOG_IN, LOG_OUT, SWITCH_THEME, CHANGE_LANG, GET_USER, SWITCH_TAB, NAME_TAB, SLIDE_SHOW } from '../Actions/ActionType'
const initialSate = {
    Login: {
        isLogin: false,
        usernumber: '',
        username: '',
        table_tab: 'Hose',
        TabName_: 'HOSE'
    },
    Theme: {
        themeMode: 'dark'
    },
    Lang: {
        langis: 'vie'
    },
    Slide: {
        isShow: false
    },

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
        case SWITCH_TAB:
            return {
                ...state,
                Login: {
                    ...state.Login,
                    table_tab: action.payload
                }
            }

        case NAME_TAB:
            return {
                ...state,
                Login: {
                    ...state.Login,
                    TabName_: action.payload
                }
            }

        case GET_USER: {
            return {
                ...state,
                Login: {
                    ...state.Login,
                    usernumber: action.payload.usernumber,
                    username: action.payload.username
                }
            }
        }

        case SLIDE_SHOW: {
            return{
                ...state,
                Slide:{
                    ...state.Slide,
                    isShow:action.payload
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
            return {
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


