import { combineReducers } from 'redux'

import authReducer from './auth'
import employeeReducer from './employee'
import employeesReducer from './employees'

export default combineReducers({
  auth: authReducer,
  employee: employeeReducer,
  employees: employeesReducer
})
