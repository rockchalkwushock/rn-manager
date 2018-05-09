import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import firebase from 'firebase'

import { config, store } from './data'
import AppRouter from './Router'

class App extends Component {
  state = {}
  componentWillMount() {
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppRouter />
        </View>
      </Provider>
    )
  }
}

export default App
