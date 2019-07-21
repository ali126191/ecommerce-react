import React from 'react';
import { shallow } from 'enzyme';
import { PhoneListItem } from '../../components/PhoneListItem';

expect('should render phonelist item correctly', () => {
    const wrapper = shallow(<PhoneListItem />);
    expect(wrapper).toMatchSnapShot();
})