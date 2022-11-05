import firebase from '../utils/firebase'
import history from '../utils/history'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
  })

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error,
      })
    })
}

export const logout = () => async (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: USER_LOGOUT })
      history.push('/')
    })
    .catch((error) => {
      console.log(error)
    })
}
