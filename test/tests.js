import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../App';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';

import About from './about.js'
import Food from './pages/food.js';
import FoodPage from './pages/foodPages.js';
import Disease from './pages/disease.js';
import DiseasePage from './pages/diseasePages.js';
import Restaurant from './pages/restaurant.js';
import RestaurantPage from './pages/restaurantPages.js';

Enzyme.configure({ adapter: new Adapter()})
var assert = require('assert');

describe('App Component testing', function() {

    it('App renders main message', () => {
      const wrapper = shallow(<App />);
      const editText = <p>Edit <code>src/App.js</code> and save to reload.</p>;
      expect(wrapper).to.contain(editText);
  
  });
  
    chai.use(chaiEnzyme())
  
  })
/*
describe('Page Tests', function() {
    describe('<Food>', () => {
        it('component renders', () => {
            const wrapper = shallow(<Food />);
            expect(wrapper.exists()).toBe(true);
        });
    });
    describe('<FoodPage>', () => {
        it('component renders', () => {
            const wrapper = shallow(<FoodPage />);
            expect(wrapper.exists()).toBe(true);
        });
    });
    describe('<Restaurant>', () => {
        it('component renders', () => {
            const wrapper = shallow(<Restaurant />);
            expect(wrapper.exists()).toBe(true);
        });
    });
    describe('<RestaurantPage>', () => {
        it('component renders', () => {
            const wrapper = shallow(<RestaurantPage />);
            expect(wrapper.exists()).toBe(true);
        });
    });
    describe('<Disease>', () => {
        it('component renders', () => {
            const wrapper = shallow(<Disease />);
            expect(wrapper.exists()).toBe(true);
        });
    });
    describe('<DiseasePage>', () => {
        it('component renders', () => {
            const wrapper = shallow(<DiseasePage />);
            expect(wrapper.exists()).toBe(true);
        });
    });
    describe('<About>', () => {
        it('component renders', () => {
            const wrapper = shallow(<About />);
            expect(wrapper.exists()).toBe(true);
        });
    });
});
*/