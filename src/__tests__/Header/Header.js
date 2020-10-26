import React from 'react';
import Header from '../../layout/Header/Header';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

/*
 * Test Header render Component
 *
 */ 

it('Renders Header component without crashing', () => {
    shallow(<Header />);
});


