import React from 'react'
import { Text, TextInput, View } from 'react-native'

type Props = {
  label: string,
  onChangeText: Function,
  placeholder: string,
  secure: boolean,
  value: string
}

const Input = (props: Props) => {
  const { input, label, view } = styles.root
  return (
    <View style={view}>
      <Text style={label}> {props.label} </Text>
      <TextInput
        autoCorrect={false}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        style={input}
        value={props.value}
      />
    </View>
  )
}

const styles = {
  root: {
    input: {
      color: '#000',
      flex: 2,
      fontSize: 18,
      height: 20,
      lineHeight: 23,
      paddingLeft: 5,
      paddingRight: 5,
      width: 100
    },
    label: {
      flex: 1,
      fontSize: 18,
      paddingLeft: 20
    },
    view: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      height: 40
    }
  }
}

export default Input
