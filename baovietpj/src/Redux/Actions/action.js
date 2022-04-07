import { LOG_IN, LOG_OUT, SWITCH_THEME, CHANGE_LANG, GET_USER, SWITCH_TAB, NAME_TAB, SLIDE_SHOW } from "../Actions/ActionType"

export const Loginredux = (data,) => {
    return {
        type: LOG_IN,
        payload: data
    }
}

export const Logoutredux = (data) => {
    return {
        type: LOG_OUT,
        payload: data
    }
}

export const SwitchTheme = (text) => {
    return {
        type: SWITCH_THEME,
        payload: text
    }
}

export const SwitchLang = (text) => {
    return {
        type: CHANGE_LANG,
        payload: text
    }
}

export const GetUser = (data) => {
    return {
        type: GET_USER,
        payload: data
    }
}

export const SwitchTab = (data) => {
    return {
        type: SWITCH_TAB,
        payload: data
    }
}

export const ChangTabName = (data) => {
    return {
        type: NAME_TAB,
        payload: data
    }
}

export const TurnSlide = (data) => {
    return{
        type:SLIDE_SHOW,
        payload:data
    }
}
