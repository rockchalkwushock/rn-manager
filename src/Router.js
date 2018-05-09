import React from 'react'
import { Actions, Router, Scene } from 'react-native-router-flux'
import { Create, Edit, Form, List } from './components'

const AppRouter = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={Form} title="Please login" initial />
      </Scene>
      <Scene key="main">
        <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={List}
          title="Employees"
          initial
        />
        <Scene
          key="employeeCreate"
          component={Create}
          title="Create Employee"
        />
        <Scene key="employeeEdit" component={Edit} title="Edit Employee" />
      </Scene>
    </Scene>
  </Router>
)

export default AppRouter
