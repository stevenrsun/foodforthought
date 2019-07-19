import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import NavBar from '../src/App.js';
import chaiEnzyme from 'chai-enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import About from '../src/about.js'
import Food from '../src/pages/food.js';
import FoodPage from '../src/pages/foodPages.js';
import Disease from '../src/pages/disease.js';
import DiseasePage from '../src/pages/diseasePages.js';
import Restaurant from '../src/pages/restaurant.js';
import RestaurantPage from '../src/pages/restaurantPages.js';

configure({ adapter: new Adapter() });


describe('Test for main', function () {
 
    it('Navigation Bar contains Food', function () {
      const wrapper = shallow(<NavBar/>);
      expect(wrapper.find('Food'));
    });
  
    it('Navigation Bar contains Restaurant', function () {
      const wrapper = shallow(<NavBar/>);
      expect(wrapper.find('Restaurant'));
    });
  
    it('Navigation Bar contains Disease', function () {
      const wrapper = shallow(<NavBar/>);
      expect(wrapper.find('Disease'));
    });
  
    it('Navigation Bar contains About', function () {
      const wrapper = shallow(<NavBar/>);
      expect(wrapper.find('About'));
    });
  
    chai.use(chaiEnzyme())
});
  

describe('Test for Food', function () {
    it('renders Food page', () => {
        const wrapper = shallow(<FoodPage/>);
        expect(wrapper.find('FoodPage'));
    });

    it('has calories', () => {
        const wrapper = shallow(<Food/>);
        expect(wrapper.find('Calories'));
    });
    
    it('has protein', () => {
        const wrapper = shallow(<Food/>);
        expect(wrapper.find('Protein'));
    });

    it('has carbs', () => {
        const wrapper = shallow(<Food/>);
        expect(wrapper.find('Carbs'));
    });

    it('has fat', () => {
        const wrapper = shallow(<Food/>);
        expect(wrapper.find('Fat'));
    });

    it('has sodium', () => {
        const wrapper = shallow(<Food/>);
        expect(wrapper.find('Sodium'));
    });
    chai.use(chaiEnzyme())
});
  
describe('Test for Disease', function () {
    it('renders Disease page', () => {
        const wrapper = shallow(<DiseasePage/>);
        expect(wrapper.find('DiseasePage'));
    });

    it('has age', () => {
        const wrapper = shallow(<Disease/>);
        expect(wrapper.find('age'));
    });
    
    it('has cause', () => {
        const wrapper = shallow(<Disease/>);
        expect(wrapper.find('cause'));
    });

    it('has deaths', () => {
        const wrapper = shallow(<Disease/>);
        expect(wrapper.find('deaths'));
    });

    it('has symptom', () => {
        const wrapper = shallow(<Disease/>);
        expect(wrapper.find('symptom'));
    });

    it('has frequency', () => {
        const wrapper = shallow(<Disease/>);
        expect(wrapper.find('frequency'));
    });
    chai.use(chaiEnzyme())
});
  
describe('Test for Restaurant', function () {
    it('renders Restaurant page', () => {
        const wrapper = shallow(<RestaurantPage/>);
        expect(wrapper.find('RestaurantPage'));
    });

    it('has price_range', () => {
        const wrapper = shallow(<Restaurant/>);
        expect(wrapper.find('price_range'));
    });
    
    it('has category', () => {
        const wrapper = shallow(<Restaurant/>);
        expect(wrapper.find('category'));
    });

    it('has address', () => {
        const wrapper = shallow(<Restaurant/>);
        expect(wrapper.find('address'));
    });

    it('has rating', () => {
        const wrapper = shallow(<Restaurant/>);
        expect(wrapper.find('rating'));
    });

    it('has review_count', () => {
        const wrapper = shallow(<Restaurant/>);
        expect(wrapper.find('review_count'));
    });
    chai.use(chaiEnzyme())
});
  