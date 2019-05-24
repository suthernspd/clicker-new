// Clicks Reducer

const woodReducerDefaultState = {
    woodCount: 0,
    woodPerClick: 1,
    woodPerClickPerUpg: 0.1,
    woodIncome: 1,
    woodClickUpgCost: 10,
    woodBonus: 1,
    woodCalcBonus: 1
};

export default (state = woodReducerDefaultState, action) => {
    switch(action.type) {
        case 'WOOD_CLICK_INCREMENT':
            return {
                ...state,
                woodCount: state.woodCount + state.woodPerClick,
                woodCalcBonus: state.woodBonus + (state.woodCount / 1000)
            };
        case 'WOOD_CLICK_INCOME':
            return {
                ...state,
                woodCount: state.woodCount + state.woodIncome,
                woodCalcBonus: state.woodBonus + (state.woodCount / 1000)
            };
        case 'WOOD_BUYCLICK':
            return {
                ...state,
                woodCount: state.woodCount - state.woodClickUpgCost,
                woodPerClick: state.woodPerClick + state.woodPerClickPerUpg,
                woodClickUpgCost: (state.woodPerClick + ((3*(state.woodPerClick-1))/100)),
                woodCalcBonus: state.woodBonus + (state.woodCount / 1000)
            };
        case 'WOOD_SELLCLICK':
            return {
                ...state,
                woodCount: state.woodCount + state.woodClickUpgCost,
                woodPerClick: state.woodPerClick - state.woodPerClickPerUpg,
                woodClickUpgCost: (state.woodPerClick + ((3*(state.woodPerClick-1))/100)),
                woodCalcBonus: state.woodBonus + (state.woodCount / 1000)
            };
        case 'WOOD_BUYINCOME':
            return {
                ...state,
                woodCount: state.woodCount - state.woodClickUpgCost,
                woodIncome: state.woodIncome + state.woodPerClickPerUpg
            };
        case 'WOOD_SELLINCOME':
            return {
                ...state,
                woodCount: state.woodCount + state.woodClickUpgCost,
                woodIncome: state.woodIncome - state.woodPerClickPerUpg
            };
        case 'WOOD_RESET':
            return {
                ...state,
                woodCount: 0,
                woodPerClick: 1 * state.woodCalcBonus,
                woodPerClickPerUpg: 0.1 * state.woodCalcBonus,
                woodIncome: 1,
                woodClickUpgCost: 10,
                woodBonus: state.woodCalcBonus,
                woodCalcBonus: state.woodCalcBonus
            };
        default:
            return state;
    }
};