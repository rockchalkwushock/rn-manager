import React, { Component } from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import { Section } from '../commons'

class Item extends Component {
  state = {}
  onRowPress = () => {
    Actions.employeeEdit({ employee: this.props.employee })
  }
  render() {
    const { name } = this.props.employee
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <Section>
            <Text style={styles.root.text}>{name}</Text>
          </Section>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  root: {
    text: {
      fontSize: 18,
      paddingLeft: 15
    }
  }
}

export default Item
