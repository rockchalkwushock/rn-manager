import React from 'react'
import { Modal, Text, View } from 'react-native'
import Button from './Button'
import Section from './Section'

const Confirm = ({ children, onAccept, onDecline, visible }) => (
  <Modal
    animationType="slide"
    onRequestClose={() => {}}
    transparent
    visible={visible}
  >
    <View style={styles.root.view}>
      <Section style={styles.root.card}>
        <Text style={styles.root.text}>{children}</Text>
      </Section>
      <Section>
        <Button onPress={onAccept}>Yes</Button>
        <Button onPress={onDecline}>No</Button>
      </Section>
    </View>
  </Modal>
)

const styles = {
  root: {
    card: {
      justifyContent: 'center'
    },
    text: {
      flex: 1,
      fontSize: 18,
      lineHeight: 40,
      textAlign: 'center'
    },
    view: {
      backgroundColor: 'rgba(0,0,0,0.75)',
      flex: 1,
      justifyContent: 'center',
      position: 'relative'
    }
  }
}

export default Confirm
