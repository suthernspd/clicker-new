import React from 'react';
import { connect } from 'react-redux';
import ResourceCounter from './ResourceCounter';

const ResourceCounters = (props) => (
    <div className="resource_counters">
        <ResourceCounter type="Wood" count={props.wood.woodCount} />
        <ResourceCounter type="Gold" count={props.gold.goldCount} />
        <ResourceCounter type="Food" count={props.food.foodCount} />
    </div>
);

const mapStateToProps = (state) => {
    return {
        wood: state.wood,
        gold: state.gold,
        food: state.food
    };
};

export default connect(mapStateToProps)(ResourceCounters);