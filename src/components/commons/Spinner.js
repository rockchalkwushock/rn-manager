import React from 'react'
import { ActivityIndicator, View } from 'react-native'

type Props = {
  size: string
}

const Spinner = (props: Props) => (
  <View style={styles.root.spinner}>
    <ActivityIndicator size={props.size || 'large'} />
  </View>
)

const styles = {
  root: {
    spinner: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    }
  }
}

export default Spinner
