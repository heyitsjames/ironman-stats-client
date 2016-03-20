import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes';
import DevTools from './DevTools';

// -------------------------------------------------------------------------
// Root Component gives the redux provider that specifies the store that
// will be used with all components in the app, store has to be provided.
// To see the creation of the redux store SEE: store/configureStore.dev
// -------------------------------------------------------------------------

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Routes />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
