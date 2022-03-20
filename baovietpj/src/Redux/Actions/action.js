import { LOG_IN,SWITCH_THEME } from "../../const"

export const Loginredux = (data) => {
    return{
        type: LOG_IN,
        payload:data
    }
}

export const SwitchTheme = (data) => {
    return{
        type:SWITCH_THEME,
        payload: data
    }
}