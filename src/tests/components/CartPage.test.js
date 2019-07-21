import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import CartPage from '../../components/CartPage';

test('should render CartPage correctly', () => {
    const wrapper = shallow(<CartPage />);
    expect(toJSON(wrapper)).toMatchSnapshot()
})