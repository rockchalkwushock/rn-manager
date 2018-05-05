// @flow

import React from 'react'
import { Text, View } from 'react-native'

type Props = {
  text: string
}

const Header = (props: Props) => (
  <View style={styles.root.view}>
    <Text style={styles.root.text}>{props.text}</Text>
  </View>
)

const styles = {
  root: {
    text: {
      fontSize: 20
    },
    view: {
      alignItems: 'center',
      backgroundColor: '#F8F8F8',
      display: 'flex',
      elevation: 2,
      height: 60,
      justifyContent: 'center',
      paddingTop: 15,
      position: 'relative',
      shadowColor: '#000',
      shadowOffset: { height: 2, width: 0 },
      shadowOpacity: 0.2
    }
  }
}

export default Header
