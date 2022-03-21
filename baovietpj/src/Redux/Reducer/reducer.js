import {LOG_IN, LOG_OUT, SWITCH_THEME} from '../../const/index'
const initialSate = {
    Login: {
        isLogin: false
},
    Theme:{
        themeMode: 'dark'
    }
}




const loginReducer = ( state = initialSate, action) => {
    console.log(state, action);
    switch(action.type){
        case LOG_IN:
            return{
                ...state,
                Login:{
                    ...state.Login,
                    isLogin:action.payload,
                }
            } 
        case LOG_OUT:
            return{
                ...state,
                Login:{
                    ...state.Login,
                    isLogin:action.payload,
                }
            }        
        default:
             return state;
    }
}

export default loginReducer;


