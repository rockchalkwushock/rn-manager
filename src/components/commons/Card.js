import React from 'react'
import { View } from 'react-native'

const Card = props => <View style={styles.root.view}>{props.children}</View>

const styles = {
  root: {
    view: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      shadowColor: '#000',
      shadowOffset: { height: 2, width: 0 },
      shadowOpacity: 0.1,
      shadowRadius: 2
    }
  }
}

export default Card
