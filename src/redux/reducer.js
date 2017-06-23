const reducer = function(state, action) {
    if (state === undefined){
        return  {

        };
    }
    if(action.type === 'STUFF_CHANGED'){
        let newState = state;
        if (newState[action.data.key]){
            newState[action.data.key] =  action.data.value;
        }
        return newState;
    }
    return state;
};
export default reducer;