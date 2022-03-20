export const SWITCH_THEME = 'SWITCH_THEME';

export const switchtheme = theme => {
    return(dispatch) => {
        dispatch({
            type: 'SWITCH_THEME',
            theme:theme,
        });
    };
};