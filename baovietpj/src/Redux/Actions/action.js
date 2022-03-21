import { LOG_IN,LOG_OUT,SWITCH_THEME } from "../../const"

export const Loginredux = (boolean) => {
    return{
        type: LOG_IN,
        payload:boolean
    }
}

export const Logoutredux = (text) => {
    return{
        type: LOG_OUT,
        payload: text
    }
}

export const SwitchTheme = (text) => {
    return{
        type:SWITCH_THEME,
        payload: text
    }
}