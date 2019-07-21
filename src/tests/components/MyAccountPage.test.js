import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import MyAccountPage from '../../components/MyAccountPage';

test('should render HelpPage correctly', () => {
    const wrapper = shallow(<MyAccountPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})