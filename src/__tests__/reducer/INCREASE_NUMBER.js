import {expect} from 'chai'
import INCREASE_NUMBER from '../../core/reducers/INCREASE_NUMBER'
import INCREMENT from '../../core/actionTypes/default'

describe('Reducer', () => {
  describe('INCREASE_NUMBER reducer', () => {

    it('should render the initial state', () => {
      expect(INCREASE_NUMBER(0, {})).to.equal(0)
    })

    it('should increment on button click', () => {
      expect(INCREASE_NUMBER(1, {type: INCREMENT })).to.equal(1)
    })

    it('should ignore unknown actions', () => {
      expect(INCREASE_NUMBER(1, {type: 'null' })).to.equal(1)
    })
  })
})
