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


describe('<App/>', function () {
 
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
  