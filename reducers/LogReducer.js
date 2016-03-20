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

const initialLogState = {
	isLoading: false,
	logList: [],
	log: {},
	error: null
};

export const log = (state = initialLogState, action) => {
	switch(action.type) {
		
		// CREATE
		//--------------------------------------------------------------------------
		case CREATE_LOG_REQUEST:
		case CREATE_LOG_SUCCESS:
		case CREATE_LOG_FAILURE:

		// RETRIEVE
		//--------------------------------------------------------------------------
		case RETRIEVE_LOG_REQUEST:
		case RETRIEVE_LOG_SUCCESS:
		case RETRIEVE_LOG_FAILURE:

		// LIST
		//--------------------------------------------------------------------------
		case LIST_LOG_REQUEST:
		case LIST_LOG_SUCCESS:
			return { ...state, isLoading: false, logList: action.data }
		case LIST_LOG_FAILURE:

		// UPDATE
		//--------------------------------------------------------------------------
		case UPDATE_LOG_REQUEST:
		case UPDATE_LOG_SUCCESS:
		case UPDATE_LOG_FAILURE:

		// DESTROY
		//--------------------------------------------------------------------------
		case DESTROY_LOG_REQUEST:
		case DESTROY_LOG_SUCCESS:
		case DESTROY_LOG_FAILURE:

		default: return state
	}
}