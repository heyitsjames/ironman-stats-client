import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
// import { resetErrorMessage } from '../actions';
// import { retrieveLog } from '../actions/LogActions';

const propTypes = {
  state: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired
};

// ------------------------------------------------------------------------------
// The Main component that gets rendered. To follow the Component heirarchy
// SEE: imported components above or routes.js follow child components.
// ------------------------------------------------------------------------------
class App extends Component {
  constructor(props) {
    super(props);
  }

// ------------------------------------------------------------------------------
// Lifecycle Events - placed immediately after the constructor()
// componentDidMount is where you would make API calls for initial data hydration.
// ------------------------------------------------------------------------------

  // componentDidMount() {
  //   this.props.dispatch(retrieveLog());
  // }

// ------------------------------------------------------------------------------
// Render - placed at the end of a component class
// ------------------------------------------------------------------------------

// Children renders the child routes component inside this parent
// SEE: routes.js for route heirarchy
  render() {
    const { children } = this.props;
    return (
      <div>
        <p>hello World, go to /hello for child component</p>
        { children }
      </div>
    );
  }
}


//  These propTypes need to be specified to keep track of what propTypes
//  are coming into the component, to maintain good practice propTypes
//  is also specified to keep track of the available props in the component.
//  If needed, use .isRequired to ensure the prop exists in the application.
// ------------------------------------------------------------------------------
App.propTypes = propTypes;

// Connect is the function used to subscribe each argument to the redux state.
// Pass the current class as a second function call to mix all the subscriptions
// to the same redux state.
export default connect(
  (state) => ({
    state,
    // log: state.log
  })
)(App);
