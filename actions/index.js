import { push } from 'react-router-redux';

// -------------------------------------------------------------------------
// This dispatches the LOGOUT action which is handled by the login reducers
// SEE: reducers/index.js for login reducers. Export functions will be called
// in the components, non exports are helper functions to be used in This
// file only.
// -------------------------------------------------------------------------

// import {
//   LOGOUT
// } from '../constants/actionTypes'

// examples
// --------
// const performLogout = () => {
//   return {
//     type: LOGOUT
//   }
// }
//
// export const logout = () => {
//   return (dispatch, getState) => {
//     localStorage.clear()
//     dispatch(performLogout())
//     dispatch(push('/vendor/login'))
//   };
// }
