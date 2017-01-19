import App from './containers/App'
import React from 'react'
import ReactDom from 'react-dom'
import Reducer from './reducers/Reducers'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, compose } from 'redux'
import {Provider} from 'react-redux'

require('./index.scss')

const composeEnhancers = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector('.root')
)
