import React from 'react';

const ResourceCounter = (props) => (
    <div className="resource_counter">
        <p>{props.type}: {props.count}</p>
    </div>
);

ResourceCounter.defaultProps = {
count: 0
};

export default ResourceCounter;