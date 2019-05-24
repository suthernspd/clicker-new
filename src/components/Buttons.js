import React from 'react';
import { connect } from 'react-redux';
import { woodClickIncrement, woodBuyClick } from '../actions/wood';
import { goldClickIncrement, goldBuyClick } from '../actions/gold';
import { foodClickIncrement, foodBuyClick } from '../actions/food';
import ClickButton from './ClickButton';
import BuyClickButton from './BuyClickButton';

export class Buttons extends React.Component {
    render() {
        const wood = this.props.wood;
        const gold = this.props.gold;
        const food = this.props.food;
        return (
            <div className="click-buttons">
                <div>
                    <ClickButton className="wood-button" ClickIncrement={this.props.woodClickIncrement} count={wood.woodCount} perClick={wood.woodPerClick} />
                    <BuyClickButton className="wood-button" BuyClick={this.props.woodBuyClick} count={wood.woodCount} perClickPerUpg={wood.woodPerClickPerUpg} clickUpgCost={wood.woodClickUpgCost} />
                </div>
                <div>
                    <ClickButton className="gold-button" ClickIncrement={this.props.goldClickIncrement} count={gold.goldCount} perClick={gold.goldPerClick} />
                    <BuyClickButton className="gold-button" BuyClick={this.props.goldBuyClick} count={gold.goldCount} perClickPerUpg={gold.goldPerClickPerUpg} clickUpgCost={gold.goldClickUpgCost} />
                </div>
                <div>
                    <ClickButton className="food-button" ClickIncrement={this.props.foodClickIncrement} count={food.foodCount} perClick={food.foodPerClick} />
                    <BuyClickButton className="food-button" BuyClick={this.props.foodBuyClick} count={food.foodCount} perClickPerUpg={food.foodPerClickPerUpg} clickUpgCost={food.foodClickUpgCost} />
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        wood: state.wood,
        gold: state.gold,
        food: state.food
    };
};

const mapDispatchToProps = (dispatch) => ({
    woodClickIncrement: () => dispatch(woodClickIncrement()),
    woodBuyClick: () => dispatch(woodBuyClick()),
    goldClickIncrement: () => dispatch(goldClickIncrement()),
    goldBuyClick: () => dispatch(goldBuyClick()),
    foodClickIncrement: () => dispatch(foodClickIncrement()),
    foodBuyClick: () => dispatch(foodBuyClick())
});

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);