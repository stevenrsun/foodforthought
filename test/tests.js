import React from 'react'
import ReactDOM from 'react-dom';
import Enzyme, { configure, shallow } from 'enzyme';
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