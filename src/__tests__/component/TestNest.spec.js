import chai, { expect } from 'chai'
import React from 'react'
import { shallow, props } from 'enzyme'
import sinon from 'sinon'
import PureTestNest from '../../components/CounterNest'
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'
import sinonChai from 'sinon-chai'

const middlewares = [thunk]
let mockStore = configureStore(middlewares)
const store = mockStore(getState);
let getState = {
  value: 0
};

const doIncreaseNumber = { type: 'INCREASE_NUMBER' };
function setup() {

  const component = shallow(
    <PureTestNest value={store.getState.value} store={store} />
  )

  return {
    component: component,
    doIncreaseNumber,
    buttons: component.find('button')
  }
}

describe('Components --CounterNest', () => {

  it('should increment an value on a click', () => {
    const { buttons, value} = setup()
    buttons.at(0).simulate('click')

    store.dispatch(doIncreaseNumber);

    const actions = store.getActions();
    getState = { value: 1}
    expect(getState.value).to.equal(1);
  });

});
