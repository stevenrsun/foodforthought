import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import getCalories from /src/pages/food.js
import getProtein from /src/pages/food.js
import getFat from /src/pages/food.js

describe('calorie count for blueberries', () => {
  it('works', () => {
    let v = new Food();
    expect(v.getCalories().toEqual(57))
  })
})

describe('protein count for blueberries', () => {
  it('works', () => {
    let v = new Food();
    expect(v.getProtein().toEqual(.7))
  })
})

describe('fat count for blueberries', () => {
  it('works', () => {
    let v = new Food();
    expect(v.getFat().toEqual(0))
  })
})