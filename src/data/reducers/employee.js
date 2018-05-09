import { EMPLOYEE_CREATE, EMPLOYEE_EDIT, EMPLOYEE_UPDATE } from '../actions'

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = INITIAL_STATE, { payload, type }) => {
  switch (type) {
    case EMPLOYEE_CREATE:
    case EMPLOYEE_EDIT:
      return INITIAL_STATE
    case EMPLOYEE_UPDATE:
      return { ...state, [payload.prop]: payload.value }
    default:
      return state
  }
}
