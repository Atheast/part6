const reducer = (state = null,action) => {
    switch(action.type) {
        case 'SET_NOTIFICATION':
            return action.data;
        default: 
            return state;
    }
}

let timeout;

export const setNotification = (data,time) => {
    return async dispatch => {
        clearTimeout(timeout);
        dispatch({
            type: 'SET_NOTIFICATION',
            data
        });

        timeout = setTimeout(() => {
            dispatch({
                type: 'SET_NOTIFICATION',
                data: null
            });
        },time*1000);
    }
}

export default reducer;