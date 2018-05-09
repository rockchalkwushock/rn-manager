import React, { Component } from 'react'
import { connect } from 'react-redux'

import { employeeCreate } from '../../data'
import { Button, Card, Section } from '../commons'
import Form from './Form'

class Create extends Component {
  state = {}
  onCreate = () => {
    const { name, phone, shift } = this.props
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }
  render() {
    return (
      <Card>
        <Form {...this.props} />
        <Section>
          <Button onPress={this.onCreate}> Create </Button>
        </Section>
      </Card>
    )
  }
}

export default connect(
  ({ employee }) => ({
    name: employee.name,
    phone: employee.phone,
    shift: employee.shift
  }),
  {
    employeeCreate
  }
)(Create)
