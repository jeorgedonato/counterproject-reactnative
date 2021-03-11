import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const { useState } = React

export default function App () {
  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <StatusBar style='auto' backgroundColor='red' />
      <Button title='Increase Counter' onPress={() => { setCounter(counter + 1) }} />
      <Button title='Decrease Counter' onPress={() => { setCounter(counter - 1) }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  text: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: '2px'
  }
})
