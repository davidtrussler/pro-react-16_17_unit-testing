import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; 
import Enzyme, {shallow, mount} from 'enzyme'; 
import App from './App';

Enzyme.configure({adapter: new Adapter()}); 

it('Uses title prop', () => {
	const titleVal = 'test title'; 
	const wrapper = shallow(<App title={titleVal} />); 

	const firstTitle = wrapper.find('h5').text(); 
	const stateValue = wrapper.state('title'); 

	expect(firstTitle).toBe(titleVal); 
	expect(stateValue).toBe(titleVal); 
}); 

it('Updates state data', () => {
	const wrapper = shallow(<App />); 
	const values = [10, 20, 30]; 

	values.forEach((val, index) => wrapper.instance().updateFieldValue(index + 1, val));
	wrapper.instance().updateTotal(); 

	expect(wrapper.state('total')).toBe(values.reduce((total, val) => total + val), 0); 
});
