import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type Props = {
  onPress: Function
}

const Button = (props: Props) => {
  const { button, text } = styles.root
  return (
    <TouchableOpacity onPress={props.onPress} style={button}>
      <Text style={text}>{props.children}</Text>
    </TouchableOpacity>
  )
}

const styles = {
  root: {
    button: {
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderColor: '#007aff',
      borderRadius: 5,
      borderWidth: 1,
      flex: 1,
      marginRight: 5,
      marginLeft: 5
    },
    text: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingBottom: 10,
      paddingTop: 10
    }
  }
}

export default Button
