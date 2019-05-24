const mainReducerDefaultState = {
    resets: 0,
    resetPls: false
};


export default (state = mainReducerDefaultState, action) => {
    switch(action.type) {
        case 'RESET_PLEASE':
            return {
                ...state,
                resetPls: true
            };
        case 'NEVERMIND':
            return {
                ...state,
                resetPls: false
            };
        case 'RESET':
            return {
                ...state,
                resets: state.resets++,
                resetPls: false
            };
        default:
            return state;
    }
};