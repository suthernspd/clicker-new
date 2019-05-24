import React from 'react';
import ResourceCounters from './ResourceCounters';

const Header = (props) => (
        <div className="header">
            <div className="container">
                <h1 className="header__title">{props.title}</h1>
                {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
            </div>
            <ResourceCounters />
        </div>
    );

Header.defaultProps = {
    title: 'Default'
};

export default Header;