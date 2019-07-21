import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import HelpPage from '../../components/HelpPage';

test('should render HelpPage correctly', () => {
    const wrapper = shallow(<HelpPage/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})