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
