import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import firebase from 'firebase'

import { Header } from './components'
import { config, store } from './data'

class App extends Component {
  state = {}
  componentWillMount() {
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header text="Manager" />
        </View>
      </Provider>
    )
  }
}

export default App
