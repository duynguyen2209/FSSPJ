import {LOG_IN, LOG_OUT} from '../../const/index'
const initialSate = {
    Login: {
        isLogin: false,
        usernumber:''
}}


const loginReducer = ( state = initialSate, action) => {
    console.log(state, action);
    switch(action.type){
        case LOG_IN:
            return{
                ...state,
                isLogin: action.payload,
                usernumber:action.usernumber
            } 
        case LOG_OUT:
            return{
                ...state,
                isLogin: action.payload,
                usernumber:''
            }        
        default:
             return state;
    }
}

export default loginReducer;