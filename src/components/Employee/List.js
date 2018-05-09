import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { ListView } from 'react-native'

import { employeesFetch } from '../../data'
import Item from './Item'

class List extends Component {
  state = {}
  componentWillMount() {
    this.props.employeesFetch()
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }
  createDataSource = ({ employees }) => {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(employees)
  }
  renderRow = employee => <Item employee={employee} />
  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        enableEmptySections
        renderRow={this.renderRow}
      />
    )
  }
}

export default connect(
  ({ employees }) => ({
    employees: _.map(employees, (val, uid) => ({ ...val, uid }))
  }),
  { employeesFetch }
)(List)
