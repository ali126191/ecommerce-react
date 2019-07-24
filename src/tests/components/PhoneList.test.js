import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import phones from '../fixtures/phones';
import { PhoneList } from '../../components/PhoneList';

test('should render PhoneList correctly', () => {
    const wrapper = shallow(<PhoneList phones={phones} />);
    expect(toJSON(wrapper)).toMatchSnapshot()
})