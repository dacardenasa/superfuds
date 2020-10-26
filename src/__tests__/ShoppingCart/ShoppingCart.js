import React from 'react';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

/*
 * Test ShoppingCart render Components
 *
 */ 

it('Renders ShoppingCart component without crashing', () => {
    shallow(<ShoppingCart />);
});



