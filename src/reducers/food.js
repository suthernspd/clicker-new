// Clicks Reducer

const foodReducerDefaultState = {
    foodCount: 0,
    foodPerClick: 1,
    foodPerClickPerUpg: 0.1,
    foodIncome: 1,
    foodClickUpgCost: 10,
    foodBonus: 1,
    foodCalcBonus: 1
};

export default (state = foodReducerDefaultState, action) => {
    switch(action.type) {
        case 'FOOD_CLICK_INCREMENT':
            return {
                ...state,
                foodCount: state.foodCount + state.foodPerClick,
                foodCalcBonus: state.foodBonus + (state.foodCount / 1000)
            };
        case 'FOOD_CLICK_INCOME':
            return {
                ...state,
                foodCount: state.foodCount + state.foodIncome,
                foodCalcBonus: state.foodBonus + (state.foodCount / 1000)
            };
        case 'FOOD_BUYCLICK':
            return {
                ...state,
                foodCount: state.foodCount - state.foodClickUpgCost,
                foodPerClick: state.foodPerClick + state.foodPerClickPerUpg,
                foodClickUpgCost: (state.foodPerClick + ((3*(state.foodPerClick-1))/100)),
                foodCalcBonus: state.foodBonus + (state.foodCount / 1000)
            };
        case 'FOOD_SELLCLICK':
            return {
                ...state,
                foodCount: state.foodCount + state.foodClickUpgCost,
                foodPerClick: state.foodPerClick - state.foodPerClickPerUpg,
                foodClickUpgCost: (state.foodPerClick + ((3*(state.foodPerClick-1))/100)),
                foodCalcBonus: state.foodBonus + (state.foodCount / 1000)
            };
        case 'FOOD_BUYINCOME':
            return {
                ...state,
                foodCount: state.foodCount - state.foodClickUpgCost,
                foodIncome: state.foodIncome + state.foodPerClickPerUpg
            };
        case 'FOOD_SELLINCOME':
            return {
                ...state,
                foodCount: state.foodCount + state.foodClickUpgCost,
                foodIncome: state.foodIncome - state.foodPerClickPerUpg
            };
        case 'FOOD_RESET':
            return {
                ...state,
                foodCount: 0,
                foodPerClick: 1 * state.foodCalcBonus,
                foodPerClickPerUpg: 0.1 * state.foodCalcBonus,
                foodIncome: 1,
                foodClickUpgCost: 10,
                foodBonus: state.foodCalcBonus,
                foodCalcBonus: state.foodCalcBonus
            };
        default:
            return state;
    }
};