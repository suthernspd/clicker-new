import React from 'react';

export default class ClickButton extends React.Component {
    onClick = () => {
        this.props.ClickIncrement();
        console.log(this.props);
    };
    render() {
        return (
            <div>
            <button className={this.props.className} onClick={this.onClick}>+{this.props.perClick} Click{this.props.count > 1 ? 's' : ''}</button>
            </div>
        );
    }
}