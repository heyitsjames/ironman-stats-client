import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

// -------------------------------------------------------------------------
// This file creates the configured redux store, Initially should not be
// modified.
// -------------------------------------------------------------------------

const reduxRouterMiddleware = syncHistory(browserHistory);
const finalCreateStore = compose(
  applyMiddleware(thunk, reduxRouterMiddleware),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
