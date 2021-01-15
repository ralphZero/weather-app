export const modalReducer = (state, action) => {
    if(action.type === 'SHOW_MODAL'){
        return state = true;
    }
    if(action.type === 'HIDE_MODAL'){
        return state = false;
    }
}