import firebase from 'firebase'

export const EMAIL_CHANGED = 'EMAIL_CHANGED'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED'

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

const loginUserSuccess = (dispatch, user) =>
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
