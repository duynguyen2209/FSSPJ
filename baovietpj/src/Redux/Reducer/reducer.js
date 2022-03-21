import {LOG_IN, LOG_OUT} from '../../const/index'
const initialSate = {
    Login: {
        isLogin: false
    }
}

const loginReducer = ( state = initialSate, action) => {
    console.log(state, action);
    switch(action.type){
        case LOG_IN:
            return{
                ...state,
                isLogin: action.payload
            } 
        case LOG_OUT:
            return{
                ...state,
                isLogin: action.payload
            }        
        default:
             return state;
    }
}

export default loginReducer;