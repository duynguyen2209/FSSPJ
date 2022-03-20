import {LOG_IN} from '../../const/index'
const initialSate = {
    user: {
        username: '',
        password: '',
        isLogin: false
    }
}

const loginReducer = ( state = initialSate, action) => {
    console.log(state, action);
    switch(action.type){
        case LOG_IN:
            return{
                ...state,
                username: action.payload
            } 
        default:
             return state;
    }
}

export default loginReducer;