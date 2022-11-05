import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from '../reducers/userReducers'
import {
  createNoticeReducer,
  fetchNoticesReducer,
  fetchNoticeReducer,
  deleteNoticeReducer,
} from '../reducers/noticeReducers'

const reducer = combineReducers({
  user: userLoginReducer,
  createNotice: createNoticeReducer,
  fetchNotices: fetchNoticesReducer,
  fetchNotice: fetchNoticeReducer,
  deleteNotice: deleteNoticeReducer,
})

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
