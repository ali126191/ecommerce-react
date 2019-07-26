import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { PhoneListItem } from '../../components/PhoneListItem';
import Phones from '../fixtures/phones';

test('should render PhoneListItem correctly', () => {
    const wrapper = shallow(<PhoneListItem {...Phones[0]} />);
    expect(toJSON(wrapper)).toMatchSnapshot()
});

