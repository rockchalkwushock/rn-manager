import React, { Component } from 'react'
import { Picker, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { Input, Section } from '../commons'
import { employeeUpdate } from '../../data'

class Form extends Component {
  state = {}
  render() {
    return (
      <View>
        <Section>
          <Input
            label="Name"
            onChangeText={value =>
              this.props.employeeUpdate({
                prop: 'name',
                value
              })
            }
            placeholder="Jane"
            value={this.props.name}
          />
        </Section>
        <Section>
          <Input
            label="Phone"
            onChangeText={value =>
              this.props.employeeUpdate({
                prop: 'phone',
                value
              })
            }
            placeholder="555-555-5555"
            value={this.props.phone}
          />
        </Section>
        <Section style={{ flexDirection: 'column' }}>
          <Text style={styles.root.shift}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: 'shift', value })
            }
            style={{ flex: 1 }}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </Section>
      </View>
    )
  }
}

const styles = {
  root: {
    shift: {
      fontSize: 18,
      paddingLeft: 20
    }
  }
}

export default connect(
  ({ employee }) => ({
    name: employee.name,
    phone: employee.phone,
    shift: employee.shift
  }),
  {
    employeeUpdate
  }
)(Form)
