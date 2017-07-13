import React, { Component } from 'react'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import TabList from './List'
import TabCountDown from './CountDown'

export default class Main extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <ScrollableTabView>
        <TabList tabLabel='横向滚动' />
        <TabCountDown tabLabel='倒计时1' />
      </ScrollableTabView>
    )
  }
}
