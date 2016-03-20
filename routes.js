import React from 'react';
import { Route, browserHistory, Router } from 'react-router';
import App from './containers/App';
import Page from './components/Page';

// All of the apps routing is done here. Use redux-router methods when changing
// routes to ensure the redux state is updated correctly.

export default function Routes() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="hello" component={Page}/>
      </Route>
    </Router>
  );
}
