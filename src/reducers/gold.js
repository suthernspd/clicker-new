// Clicks Reducer

const goldReducerDefaultState = {
    goldCount: 0,
    goldPerClick: 1,
    goldPerClickPerUpg: 0.1,
    goldIncome: 1,
    goldClickUpgCost: 10,
    goldBonus: 1,
    goldCalcBonus: 1
};

export default (state = goldReducerDefaultState, action) => {
    switch(action.type) {
        case 'GOLD_CLICK_INCREMENT':
            return {
                ...state,
                goldCount: state.goldCount + state.goldPerClick,
                goldCalcBonus: state.goldBonus + (state.goldCount / 1000)
            };
        case 'GOLD_CLICK_INCOME':
            return {
                ...state,
                goldCount: state.goldCount + state.goldIncome,
                goldCalcBonus: state.goldBonus + (state.goldCount / 1000)
            };
        case 'GOLD_BUYCLICK':
            return {
                ...state,
                goldCount: state.goldCount - state.goldClickUpgCost,
                goldPerClick: state.goldPerClick + state.goldPerClickPerUpg,
                goldClickUpgCost: (state.goldPerClick + ((3*(state.goldPerClick-1))/100)),
                goldCalcBonus: state.goldBonus + (state.goldCount / 1000)
            };
        case 'GOLD_SELLCLICK':
            return {
                ...state,
                goldCount: state.goldCount + state.goldClickUpgCost,
                goldPerClick: state.goldPerClick - state.goldPerClickPerUpg,
                goldClickUpgCost: (state.goldPerClick + ((3*(state.goldPerClick-1))/100)),
                goldCalcBonus: state.goldBonus + (state.goldCount / 1000)
            };
        case 'GOLD_BUYINCOME':
            return {
                ...state,
                goldCount: state.goldCount - state.goldClickUpgCost,
                goldIncome: state.goldIncome + state.goldPerClickPerUpg
            };
        case 'GOLD_SELLINCOME':
            return {
                ...state,
                goldCount: state.goldCount + state.goldClickUpgCost,
                goldIncome: state.goldIncome - state.goldPerClickPerUpg
            };
        case 'GOLD_RESET':
            return {
                ...state,
                goldCount: 0,
                goldPerClick: 1 * state.goldCalcBonus,
                goldPerClickPerUpg: 0.1 * state.goldCalcBonus,
                goldIncome: 1,
                goldClickUpgCost: 10,
                goldBonus: state.goldCalcBonus,
                goldCalcBonus: state.goldCalcBonus
            };
        default:
            return state;
    }
};