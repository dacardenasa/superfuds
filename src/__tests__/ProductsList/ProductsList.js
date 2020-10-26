import React from 'react';
import ProductsList from '../../components/ProductsList/ProductsList';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, render, configure } from 'enzyme';

configure({ adapter: new Adapter() });

/*
 * Test ProductsList render Component
 *
 */ 

it('Renders ProductsList component without crashing', () => {
    shallow(<ProductsList />);
});

it('Render no products when store is empty', () => {
    const wrapper = render(<ProductsList products={[]} />);
    expect(wrapper.find('.product').length).toBe(0);
});



