import {
  EMAIL_CHANGED,
  LOGIN_USER_FAIL,
  LOGIN_USER_PENDING,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED
} from '../actions'

const INITIAL_STATE = {
  email: '',
  error: false,
  loading: false,
  message: '',
  password: '',
  user: null
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload }
    case PASSWORD_CHANGED:
      return { ...state, password: payload }
    case LOGIN_USER_FAIL:
      return {
        ...state,
        email: '',
        error: true,
        loading: false,
        message: 'Authentication Failed',
        password: ''
      }
    case LOGIN_USER_PENDING:
      return { ...state, error: false, loading: true, message: '' }
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: payload
      }
    default:
      return state
  }
}
