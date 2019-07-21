import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import LoginPage from '../../components/LoginPage';

test('should render HelpPage correctly', () => {
    const wrapper = shallow(<LoginPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})