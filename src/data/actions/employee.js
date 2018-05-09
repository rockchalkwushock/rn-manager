import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
  EMPLOYEE_CREATE,
  EMPLOYEE_EDIT,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_UPDATE
} from './types'

export const employeesFetch = () => async dispatch => {
  const { currentUser } = firebase.auth()
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() })
    })
}

export const employeeCreate = ({ name, phone, shift }) => async dispatch => {
  const { currentUser } = firebase.auth()

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE })
      Actions.employeeList({ type: 'reset' })
    })
}

export const employeeUpdate = ({ prop, value }) => ({
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
})

export const employeeEdit = ({ name, phone, shift, uid }) => async dispatch => {
  const { currentUser } = firebase.auth()

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_EDIT })
      Actions.employeeList({ type: 'reset' })
    })
}

export const employeeDelete = ({ uid }) => async dispatch => {
  const { currentUser } = firebase.auth()

  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then(() => {
      Actions.employeeList()
    })
}
