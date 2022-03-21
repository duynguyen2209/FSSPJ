import { LOG_IN,LOG_OUT,SWITCH_THEME } from "../../const"

export const Loginredux = (data) => {
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

export const SwitchTheme = (data) => {
    return{
        type:SWITCH_THEME,
        payload: data
    }
}