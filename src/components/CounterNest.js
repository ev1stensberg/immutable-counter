import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {
  doIncreaseNumber
} from '../core/actionCreators/doIncreaseNumber'

class CounterNest extends Component {
  render() {
    const {
      value,
      doIncreaseNumber
      } = this.props;


    return (
      <div>
        <p style={{
          marginLeft: 450,
          marginTop: 50,
          fontSize: 200
          }}
        >
        {value}
        </p>
        {' '}
        <button style={{
          marginTop: 0,
          marginLeft: 375,
          width: 250,
          height: 80
        }}
          onClick={doIncreaseNumber}
        >
        Increase Number
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    doIncreaseNumber
  }, dispatch);
}

export { CounterNest as PureTestNest};
module.exports = connect(mapStateToProps, mapDispatchToProps)(CounterNest);
