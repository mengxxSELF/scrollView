import React from 'react'
import {
  StyleSheet,
  TextInput
} from 'react-native'

export default (props) => {
  let {type} = props
  return (
    <TextInput style={styles.input}
      placeholder={`please enter ${type}`}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    height: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc'
  }
})
