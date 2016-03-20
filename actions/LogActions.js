//------------------------------------------------------------------------------
// Importing the services which make the API calls
//------------------------------------------------------------------------------

import LogServices from '../services/LogServices';

//------------------------------------------------------------------------------
// Import the actions types used to make API calls
//------------------------------------------------------------------------------

import {
	CREATE_LOG_REQUEST,
	CREATE_LOG_SUCCESS,
	CREATE_LOG_FAILURE,
	RETRIEVE_LOG_REQUEST,
	RETRIEVE_LOG_SUCCESS,
	RETRIEVE_LOG_FAILURE,
	LIST_LOG_REQUEST,
	LIST_LOG_SUCCESS,
	LIST_LOG_FAILURE,
	UPDATE_LOG_REQUEST,
	UPDATE_LOG_SUCCESS,
	UPDATE_LOG_FAILURE,
	DESTROY_LOG_REQUEST,
	DESTROY_LOG_SUCCESS,
	DESTROY_LOG_FAILURE
} from '../constants/LogTypes';

// CREATE
//------------------------------------------------------------------------------
const createLogRequest = () => ({ type: CREATE_LOG_REQUEST });
const createLogSuccess = () => ({ type: CREATE_LOG_SUCCESS });
const createLogFailure = () => ({ type: CREATE_LOG_FAILURE });
export const createLog = () => (dispatch, getState) => {
		LogServices.req.retrieve()
			.then((data) => { dispatch(createLogSuccess(data)) })
			.catch((error) => {	dispatch(createLogFailure(error)) })
}

// RETRIEVE
//------------------------------------------------------------------------------
const retrieveLogRequest = () => ({ type: RETRIEVE_LOG_REQUEST });
const retrieveLogSuccess = (data) => ({ type: RETRIEVE_LOG_SUCCESS, data });
const retrieveLogFailure = () => ({ type: RETRIEVE_LOG_FAILURE });
export const retrieveLog = () => (dispatch, getState) => {
		LogServices.req.retrieve()
			.then((data) => { dispatch(retrieveLogSuccess(data)) })
			.catch((error) => {	dispatch(retrieveLogFailure(error)) })
}

// LIST
//------------------------------------------------------------------------------
const listLogRequest = () => ({ type: LIST_LOG_REQUEST });
const listLogSuccess = (data) => ({ type: LIST_LOG_SUCCESS, data });
const listLogFailure = () => ({ type: LIST_LOG_FAILURE });
export const listLog = () => (dispatch, getState) => {
		LogServices.req.list()
			.then((data) => { dispatch(listLogSuccess(data)) })
			.catch((error) => {	dispatch(listLogFailure(error)) })
}

// UPDATE
//------------------------------------------------------------------------------
const updateLogRequest = () => ({ type: UPDATE_LOG_REQUEST });
const updateLogSuccess = () => ({ type: UPDATE_LOG_SUCCESS });
const updateLogFailure = () => ({ type: UPDATE_LOG_FAILURE });
export const updateLog = () => (dispatch, getState) => {
		LogServices.req.update()
			.then((data) => { dispatch(updateLogSuccess(data)) })
			.catch((error) => {	dispatch(updateLogFailure(error)) })
}

// DESTROY
//------------------------------------------------------------------------------
const destroyLogRequest = () => ({ type: DESTROY_LOG_REQUEST });
const destroyLogSuccess = () => ({ type: DESTROY_LOG_SUCCESS });
const destroyLogFailure = () => ({ type: DESTROY_LOG_FAILURE });
export const destroyLog = () => (dispatch, getState) => {
		LogServices.req.destroy()
			.then((data) => { dispatch(destroyLogSuccess(data)) })
			.catch((error) => {	dispatch(destroyLogFailure(error)) })
}