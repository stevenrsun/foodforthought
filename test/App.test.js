import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';

import About from '../src/about.js'
import Food from '../src/pages/food.js';
import FoodPage from '../src/pages/foodPages.js';
import Disease from '../src/pages/disease.js';
import DiseasePage from '../src/pages/diseasePages.js';
import Restaurant from '../src/pages/restaurant.js';
import RestaurantPage from '../src/pages/restaurantPages.js';

configure({ adapter: new Adapter() });


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
    chai.use(chaiEnzyme())
});