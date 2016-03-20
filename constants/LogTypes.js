//------------------------------------------------------------------------------
// When making API calls we want to use request, success, and failure for each
// of the calls. You can see why this is useful in the reducers/LogReducer.js
//------------------------------------------------------------------------------

// CREATE
//------------------------------------------------------------------------------
export const CREATE_LOG_REQUEST = 'CREATE_LOG_REQUEST';
export const CREATE_LOG_SUCCESS = 'CREATE_LOG_SUCCESS';
export const CREATE_LOG_FAILURE = 'CREATE_LOG_FAILURE';

// RETRIEVE
//------------------------------------------------------------------------------
export const RETRIEVE_LOG_REQUEST = 'RETRIEVE_LOG_REQUEST';
export const RETRIEVE_LOG_SUCCESS = 'RETRIEVE_LOG_SUCCESS';
export const RETRIEVE_LOG_FAILURE = 'RETRIEVE_LOG_FAILURE';

// LIST
//------------------------------------------------------------------------------
export const LIST_LOG_REQUEST = 'LIST_LOG_REQUEST';
export const LIST_LOG_SUCCESS = 'LIST_LOG_SUCCESS';
export const LIST_LOG_FAILURE = 'LIST_LOG_FAILURE';

// UPDATE
//------------------------------------------------------------------------------
export const UPDATE_LOG_REQUEST = 'UPDATE_LOG_REQUEST';
export const UPDATE_LOG_SUCCESS = 'UPDATE_LOG_SUCCESS';
export const UPDATE_LOG_FAILURE = 'UPDATE_LOG_FAILURE';

// DESTROY
//------------------------------------------------------------------------------
export const DESTROY_LOG_REQUEST = 'DESTROY_LOG_REQUEST';
export const DESTROY_LOG_SUCCESS = 'DESTROY_LOG_SUCCESS';
export const DESTROY_LOG_FAILURE = 'DESTROY_LOG_FAILURE';