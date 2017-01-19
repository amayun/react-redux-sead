import React from 'react'
import Tabs from '../components/tabs/Tabs'
import {connect} from 'react-redux'
import {test, asyncTest} from '../actions/Actions'

class App extends React.Component {
  render() {
    const {props} = this
    return (
        <div className="">
          <button onClick={() => props.test(props.first + 1)}>{props.first}</button>
          <button
              onClick={() => props.asyncTest()}
              display-if={props.first % 2}>+10 (2 sec       )
          </button>
          <Tabs/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    first: state.first
  }
}

const mapDispatchToHandlers = {
  test,
  asyncTest
}

export default connect(mapStateToProps, mapDispatchToHandlers)(App)
