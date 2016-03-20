import 'babel-core/polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'

//creates the redux store
const store = configureStore()

//implements the store into the application. SEE: Root.dev
render(
  <Root store={store} />,
  document.getElementById('root')
)
