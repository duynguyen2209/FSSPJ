import { lightheme } from "../../Theme";
import { SWITCH_THEME } from "../Actions/actionTheme";

const initialState = {
    theme: lightheme
}

const themeReducer = (state = initialState ,action) => {
    switch(action.type){
        case SWITCH_THEME:
            return {
                theme: action.theme
            }
        default: 
            return state;
    }
}

export default themeReducer;