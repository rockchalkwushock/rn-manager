import { EMPLOYEES_FETCH_SUCCESS } from '../actions'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return payload
    default:
      return state
  }
}
