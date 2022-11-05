import firebase, { db } from '../utils/firebase'
import { nanoid } from 'nanoid'
import history from '../utils/history'
import {
  CREATE_NOTICE_REQUEST,
  CREATE_NOTICE_SUCCESS,
  CREATE_NOTICE_FAIL,
  FETCH_NOTICES_REQUEST,
  FETCH_NOTICES_SUCCESS,
  FETCH_NOTICES_FAIL,
  FETCH_NOTICES_RESET,
  FETCH_NOTICE_REQUEST,
  FETCH_NOTICE_SUCCESS,
  FETCH_NOTICE_FAIL,
  UPDATE_NOTICE_REQUEST,
  UPDATE_NOTICE_SUCCESS,
  UPDATE_NOTICE_FAIL,
  DELETE_NOTICE_REQUEST,
  DELETE_NOTICE_SUCCESS,
  DELETE_NOTICE_FAIL,
} from '../constants/noticeConstants'

// === Firestore listeners for fetching data realtime
const listeners = []

export const createNotice = (title, contents, fixed) => async (dispatch) => {
  dispatch({
    type: CREATE_NOTICE_REQUEST,
  })

  const user = firebase.auth().currentUser

  if (!user) {
    return dispatch({
      type: CREATE_NOTICE_FAIL,
      payload: '로그인해주세요',
    })
  }

  const batch = db.batch()
  const id = nanoid(10)
  const createdAt = firebase.firestore.Timestamp.fromDate(new Date())

  const infoRef = db.collection('noticeInfo').doc(id)
  batch.set(infoRef, {
    title,
    fixed,
    createdAt,
    hits: 0,
  })

  const detailRef = db.collection('noticeDetail').doc(id)
  batch.set(detailRef, {
    title,
    contents,
    fixed,
    createdAt,
    hits: 0,
  })

  batch
    .commit()
    .then(() => {
      dispatch({
        type: CREATE_NOTICE_SUCCESS,
      })
      history.push('/notices/page/1')
    })
    .catch((error) =>
      dispatch({
        type: CREATE_NOTICE_FAIL,
        payload: error,
      })
    )
}

// === Fetch all notices info
export const fetchNotices = () => async (dispatch) => {
  dispatch({
    type: FETCH_NOTICES_REQUEST,
  })

  const listener = db
    .collection('noticeInfo')
    .orderBy('createdAt', 'desc')
    .onSnapshot(
      (querySnapshot) => {
        const headings = []
        querySnapshot.forEach((doc) =>
          headings.push({ id: doc.id, ...doc.data() })
        )
        dispatch({
          type: FETCH_NOTICES_SUCCESS,
          payload: headings,
        })
      },
      (error) =>
        dispatch({
          type: FETCH_NOTICES_FAIL,
          payload: error,
        })
    )

  listeners.push(listener)
}

export const detachListeners = () => async (dispatch) => {
  listeners.forEach((listener) => listener())

  dispatch({
    type: FETCH_NOTICES_RESET,
  })
}

export const fetchNotice = (id) => async (dispatch) => {
  dispatch({
    type: FETCH_NOTICE_REQUEST,
  })

  const detailRef = db.collection('noticeDetail').doc(id)
  const infoRef = db.collection('noticeInfo').doc(id)

  db.runTransaction((transaction) => {
    return transaction.get(detailRef).then((doc) => {
      if (!doc.exists) {
        throw '해당하는 문서가 없습니다.'
      }
      const newHits = doc.data().hits + 1
      transaction.update(detailRef, { hits: newHits })
      transaction.update(infoRef, { hits: newHits })
      return { ...doc.data(), id: doc.id, hits: newHits }
    })
  })
    .then((data) =>
      dispatch({
        type: FETCH_NOTICE_SUCCESS,
        payload: data,
      })
    )
    .catch((error) => {
      console.log(error)
      dispatch({
        type: FETCH_NOTICE_FAIL,
        payload: error,
      })
    })
}

export const updateNotice =
  (id, title, contents, fixed) => async (dispatch) => {
    dispatch({
      type: UPDATE_NOTICE_REQUEST,
    })

    const batch = db.batch()

    const infoRef = db.collection('noticeInfo').doc(id)
    batch.update(infoRef, { title, fixed })

    const detailRef = db.collection('noticeDetail').doc(id)
    batch.update(detailRef, { title, contents, fixed })

    batch
      .commit()
      .then(() => {
        dispatch({
          type: UPDATE_NOTICE_SUCCESS,
        })
        history.push(`/notices/${id}`)
      })
      .catch((error) =>
        dispatch({
          type: UPDATE_NOTICE_FAIL,
          payload: error,
        })
      )
  }

export const deleteNotice = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_NOTICE_REQUEST,
  })

  const batch = db.batch()

  const infoRef = db.collection('noticeInfo').doc(id)
  batch.delete(infoRef)

  const detailRef = db.collection('noticeDetail').doc(id)
  batch.delete(detailRef)

  batch
    .commit()
    .then(() => {
      dispatch({
        type: DELETE_NOTICE_SUCCESS,
      })
      history.push(`/notices/page/1`)
    })
    .catch((error) =>
      dispatch({
        type: DELETE_NOTICE_FAIL,
        payload: error,
      })
    )
}
