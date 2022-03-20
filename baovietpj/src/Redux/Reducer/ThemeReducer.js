 import { SWITCH_THEME } from "../../const";

 const initialSate = {
     Theme: 'dark'
 }

 const ThemeReducer = (state = initialSate, action) => {
     switch(action.type) {
         case SWITCH_THEME:
             return{
                 ...state,
                 Theme:'light'
             }
     }
 }