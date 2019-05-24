import React from 'react';

export default class BuyClickButton extends React.Component {
    onClick = () => {
        if (this.props.count >= this.props.clickUpgCost) {
            this.props.BuyClick();
        }
        console.log(this.props);
    };
    render() {
        return (
            <div>
                <button className={this.props.className} onClick={this.onClick}>
                +{this.props.perClickPerUpg} per Click{this.props.perClickPerUpg > 1 ? 's' : ''}, Cost: {this.props.clickUpgCost}
                </button>
            </div>
        );
    }
}