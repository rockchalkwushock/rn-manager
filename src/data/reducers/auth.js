import { EMAIL_CHANGED } from '../actions'

const INITIAL_STATE = { email: '' }

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case EMAIL_CHANGED:
      return { ...state, email: payload }

    default:
      return state
  }
}
