import * as ActionTypes from '../actions';
import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

// import all of the reducers into index.js (this file) and export from there.

// import { log } from './LogReducer';

// ----------------------------------------------------------------------
//  The reducer functions are used to evaluate each action.type to update
//  the state with pure functions to avoid mutations. At the end of the
//  file combineReducers needs to be called to combine all of the reducers
// ----------------------------------------------------------------------

// example login reducer
// const login = (state=initialLoginState, action) => {
//   switch(action.type) {
//     case LOGIN_ATTEMPT:
//       return {
//         isLoggingIn: true,
//         isLoggedIn: false
//       };
//     case LOGIN_FAILED:
//       return {
//         error: action.error,
//         isLoggingIn: false,
//         isLoggedIn: false
//       };
//     case LOGIN_SUCCESS:
//       return {
//         error: null,
//         isLoggingIn: false,
//         isLoggedIn: true
//       };
//     case LOGOUT:
//       return {
//         error: null,
//         isLoggingIn: false,
//         isLoggedIn: false
//       };
//     default:
//       return state;
//   }
// }

const rootReducer = combineReducers({
  // login,
  // log,
  routeReducer,
  routing: routeReducer
});

export default rootReducer;
