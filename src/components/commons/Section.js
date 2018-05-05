import React from 'react'
import { View } from 'react-native'

const Section = props => <View style={styles.root.view}>{props.children}</View>

const styles = {
  root: {
    view: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderColor: '#ddd',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding: 5,
      position: 'relative'
    }
  }
}

export default Section
