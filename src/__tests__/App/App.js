import React from 'react';
import App from '../../components/App/App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });

/*
 * Test App render Component
 *
 */ 

it('Renders App component without crashing', () => {
    shallow(<App />);
    /*  shallow Method: 
     *  wrapper to search components in App.tsx
     *  Into App should render one component productList
     *  const wrapper = shallow(<App />);
     *  expect(wrapper.find(productsList).length).toBe(1);
     */
});
