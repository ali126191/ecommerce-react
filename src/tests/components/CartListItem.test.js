import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CartListItem from '../../components/CartListItem';

test('should render CartListItem correctly', () => {
    const wrapper = shallow(<CartListItem />);
    expect(toJSON(wrapper)).toMatchSnapshot()
})