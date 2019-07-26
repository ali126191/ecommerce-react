import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { CartItems } from '../../components/CartItems';
import phones from '../fixtures/phones';

test('should render CartItems correctly', () => {
    const wrapper = shallow(<CartItems cart={phones} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})