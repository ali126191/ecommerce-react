import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByPrice, sortByRandom } from '../actions/filters';

export class PhoneListFilters extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
     }
     onSortChange = (e) => {
        if (e.target.value === 'price') {
            this.props.sortByPrice();
        } else if (e.target.value === 'random') {
            this.props.sortByRandom();
        }
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text}
                    onChange={this.onTextChange}  
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                     <option value="price">Price</option>
                     <option value="random">Random</option>
                </select>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByPrice: () => dispatch(sortByPrice()),
    sortByRandom: () => dispatch(sortByRandom())
});

export default connect(mapStateToProps, mapDispatchToProps)(PhoneListFilters);