import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
  EMAIL_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED
} from './types'

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text
})

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text
})

export const loginUser = ({ email, password }) => async dispatch => {
  dispatch({ type: LOGIN_USER_PENDING })
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(error => {
      console.log(error)
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch))
    })
}

const loginUserFail = dispatch =>
  dispatch({
    type: LOGIN_USER_FAIL
  })

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
  Actions.main()
}
