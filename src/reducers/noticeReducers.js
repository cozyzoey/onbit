import {
	CREATE_NOTICE_REQUEST,
	CREATE_NOTICE_SUCCESS,
	CREATE_NOTICE_FAIL,
	FETCH_NOTICES_REQUEST,
	FETCH_NOTICES_SUCCESS,
	FETCH_NOTICES_FAIL,
	FETCH_NOTICE_REQUEST,
	FETCH_NOTICE_SUCCESS,
	FETCH_NOTICE_FAIL,
	UPDATE_NOTICE_REQUEST,
	UPDATE_NOTICE_SUCCESS,
	UPDATE_NOTICE_FAIL,
	DELETE_NOTICE_REQUEST,
	DELETE_NOTICE_SUCCESS,
	DELETE_NOTICE_FAIL,
	FETCH_NOTICES_RESET,
} from '../constants/noticeConstants'

export const createNoticeReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_NOTICE_REQUEST:
			return { loading: true }
		case CREATE_NOTICE_SUCCESS:
			return { loading: false }
		case CREATE_NOTICE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const fetchNoticesReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_NOTICES_REQUEST:
			return { ...state, loading: true }
		case FETCH_NOTICES_SUCCESS:
			return { loading: false, notices: action.payload }
		case FETCH_NOTICES_RESET:
			return { loading: false }
		case FETCH_NOTICES_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const fetchNoticeReducer = (state = {}, action) => {
	switch (action.type) {
		case FETCH_NOTICE_REQUEST:
			return { loading: true }
		case FETCH_NOTICE_SUCCESS:
			return { loading: false, notice: action.payload }
		case FETCH_NOTICE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const updateNoticeReducer = (state = {}, action) => {
	switch (action.type) {
		case UPDATE_NOTICE_REQUEST:
			return { ...state, loading: true }
		case UPDATE_NOTICE_SUCCESS:
			return { loading: false }
		case UPDATE_NOTICE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export const deleteNoticeReducer = (state = {}, action) => {
	switch (action.type) {
		case DELETE_NOTICE_REQUEST:
			return { ...state, loading: true }
		case DELETE_NOTICE_SUCCESS:
			return { loading: false }
		case DELETE_NOTICE_FAIL:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}
