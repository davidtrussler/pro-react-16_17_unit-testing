import React from 'react';
import Adapter from 'enzyme-adapter-react-16'; 
import Enzyme, {shallow} from 'enzyme'; 
import App from './App';
import {ValueInput} from './ValueInput'; 

Enzyme.configure({adapter: new Adapter()}); 

it ('Renders three ValueInputs', () => {
	const wrapper = shallow(<App />); 
	const valCount = wrapper.find(ValueInput).length; 
	expect(valCount).toBe(3); 
}); 
