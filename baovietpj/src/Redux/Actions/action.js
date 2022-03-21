import { LOG_IN,LOG_OUT,SWITCH_THEME,CHANGE_LANG, GET_USER } from "../../const"

export const Loginredux = (data,) => {
    return{
        type: LOG_IN,
        payload:data
    }
}

export const Logoutredux = (data) => {
    return{
        type: LOG_OUT,
        payload: data
    }
}

export const SwitchTheme = (text) => {
    return{
        type:SWITCH_THEME,
        payload: text
    }
}

export const SwitchLang = (text) => {
    return{
        type:CHANGE_LANG,
        payload: text
    }
}

export const GetUser = (data) => {
    return{
        type:GET_USER,
        payload:data
    }
}