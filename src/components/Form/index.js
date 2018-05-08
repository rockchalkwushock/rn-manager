import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { Button, Card, Input, Section, Spinner } from '../commons'
import { emailChanged, loginUser, passwordChanged } from '../../data'

type Props = {
  email: string,
  error: boolean,
  loading: boolean,
  message: string,
  password: string
}

class Form extends Component<Props> {
  state = {}
  onEmailChange = text => this.props.emailChanged(text)
  onLogin = () => {
    const { email, password } = this.props
    this.props.loginUser({ email, password })
  }
  onPasswordChange = text => this.props.passwordChanged(text)
  renderError = () =>
    this.props.error ? (
      <View style={{ backgroundColor: 'white' }}>
        <Text style={styles.root.error}>{this.props.message}</Text>
      </View>
    ) : null
  renderButton = () =>
    this.props.loading ? (
      <Spinner size="large" />
    ) : (
      <Section>
        <Button onPress={this.onLogin}>Log In</Button>
      </Section>
    )
  render() {
    return (
      <Card>
        <Section>
          <Input
            label="Email"
            onChangeText={this.onEmailChange}
            placeholder="email@gmail.com"
            value={this.props.email}
          />
        </Section>
        <Section>
          <Input
            label="Password"
            onChangeText={this.onPasswordChange}
            placeholder="password"
            secure
            value={this.props.password}
          />
        </Section>

        {this.renderError()}

        {this.renderButton()}
      </Card>
    )
  }
}

const styles = {
  root: {
    error: {
      alignSelf: 'center',
      color: 'red',
      fontSize: 20
    }
  }
}

export default connect(
  ({ auth }) => ({
    email: auth.email,
    error: auth.error,
    loading: auth.loading,
    message: auth.message,
    password: auth.password
  }),
  {
    emailChanged,
    loginUser,
    passwordChanged
  }
)(Form)
