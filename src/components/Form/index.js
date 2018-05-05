import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Button, Card, Input, Section } from '../commons'
import { emailChanged } from '../../data'

class Form extends Component {
  state = {}
  onEmailChange = text => {
    this.props.emailChanged(text)
  }
  render() {
    return (
      <Card>
        <Section>
          <Input
            label="Email"
            onChangeText={this.onEmailChange}
            placeholder="email@gmail.com"
          />
        </Section>
        <Section>
          <Input label="Password" placeholder="password" secure />
        </Section>
        <Section>
          <Button>Log In</Button>
        </Section>
      </Card>
    )
  }
}

export default connect(null, { emailChanged })(Form)
