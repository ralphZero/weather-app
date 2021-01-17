export const weatherReducer = (state, action) => {
    if(action.type === 'SET_WEATHER'){
        state = action.data;
        return state;
    }
}

export const locationReducer = (state, action) => {
    if(action.type === 'CHANGE_LOCATION'){
        state = action.location;
        return state;
    }
}