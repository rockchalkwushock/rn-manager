import React, { Component } from 'react'
import { connect } from 'react-redux'
import Communications from 'react-native-communications'
import _ from 'lodash'

import { employeeDelete, employeeEdit, employeeUpdate } from '../../data'
import { Button, Card, Confirm, Section } from '../commons'
import Form from './Form'

class Edit extends Component {
  state = {
    visible: false
  }
  componentWillMount() {
    _.each(this.props.employee, (val, prop) =>
      this.props.employeeUpdate({ prop, val })
    )
  }
  onAccept = () => {
    const { uid } = this.props.employee
    this.props.employeeDelete()
  }
  onDecline = () => this.setState(state => ({ ...state, visible: false }))
  onEdit = () => {
    const { name, phone, shift } = this.props
    this.props.employeeEdit({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    })
  }
  onFire = () => this.setState(state => ({ ...state, visible: true }))
  onText = () => {
    const { phone, shift } = this.props

    Communications.text(phone, `Your upcoming shift is on ${shift}.`)
  }
  render() {
    return (
      <Card>
        <Form {...this.props} />
        <Section>
          <Button onPress={this.onEdit}> Save Changes </Button>
        </Section>
        <Section>
          <Button onPress={this.onText}> Text Schedule </Button>
        </Section>
        <Section>
          <Button onPress={this.onFire}> Fire Employee </Button>
        </Section>

        <Confirm
          onAccept={this.onAccept}
          onDecline={this.onDecline}
          visible={this.state.visible}
        >
          Are you sure you want to delete this?
        </Confirm>
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
    employeeDelete,
    employeeEdit,
    employeeUpdate
  }
)(Edit)
