import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByPrice, sortByRandom} from '../actions/filters';

const PhoneListFilters = (props) => (
    <div>
        <input 
            value={props.filters.text}
            type="text" 
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
             }}  
        />
        <select 
            onChange={(e) => {
                if (e.target.value === 'price') {
                    props.dispatch(sortByPrice())
                } else if (e.target.value === 'random') {
                    props.dispatch(sortByRandom())
                }
            }}
        >
             <option value="price">Price</option>
             <option value="random">Random</option>
        </select>
    </div>
)

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(PhoneListFilters);