import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import CountDownTimer from 'react_native_countdowntimer'
import CountdownCircle from 'react-native-countdown-circle'

export default () => {
  return (
    <View>
    <CountDownTimer
      date="2017-11-28T00:00:00+00:00"
      days={{plural: 'Days ',singular: 'day '}}
      hours=':'
      mins=':'
      segs=''
    />
    <CountdownCircle
      seconds={10}
      radius={30}
      borderWidth={8}
      color="#ff003f"
      bgColor="#fff"
      textStyle={{ fontSize: 20 }}
      onTimeElapsed={() => console.log('Elapsed!')}
    />
    </View>
  )
}
