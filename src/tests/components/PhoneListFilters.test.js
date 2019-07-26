import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { PhoneListFilters } from '../../components/PhoneListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByPrice, sortByRandom, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByPrice = jest.fn();
    sortByRandom = jest.fn(); 
    wrapper = shallow(
        <PhoneListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByPrice={sortByPrice}
            sortByRandom={sortByRandom}
        />
    );
});

test('should render PhoneListFilter correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render PhoneListFilter with alt data correctly', () => {
    wrapper.setProps({
      filters: altFilters
    });
    expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'iphone';
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    
})

test('should sort by price', () => {
    const value = 'price';
    wrapper.setProps({
        filter: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByPrice).toHaveBeenCalled();
});

test('should sort by random', () => {
    const value = 'random';
    wrapper.setProps({
        filter: altFilters
    });
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByRandom).toHaveBeenCalled();
});