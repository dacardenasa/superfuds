import React from 'react';
import ShoppingCartButton from '../../components/ShoppingCartButton/ShopingCartButton';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

/*
 * Test ShoppingCartButton render Component
 *
 */ 

it('Renders ShoppingCartButton component without crashing', () => {
    shallow(<ShoppingCartButton />);
});


