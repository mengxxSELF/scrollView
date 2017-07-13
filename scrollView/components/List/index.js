import React, {Component} from 'react'
import {View, ScrollView, Text, StyleSheet} from 'react-native'
import CommendItem from '../Item'

let styles = StyleSheet.create({
  container: {
    height: 190
  },
  text: {
    textAlign: 'center'
  },
  horizontalScrollView: {
    height: 120
  }
})

const dataList = [
  {
    anchor: {
      name: '暗黑料理',
      avatar: 'https://avatars0.githubusercontent.com/u/20737114?v=3&u=2569dd145b519f0bacc3874665e9dde45129c346&s=200'
    },
    uid: 12345
  },
  {
    anchor: {
      name: '暗黑料理',
      avatar: 'https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67'
    },
    uid: 1234
  },
  {
    anchor: {
      name: '暗黑料理',
      avatar: 'https://react-china.org/uploads/default/38/c4b96a594bd352e0.png'
    },
    uid: 123
  },
  {
    anchor: {
      name: '暗黑料理',
      avatar: 'https://facebook.github.io/react/img/logo_og.png'
    },
    uid: 12
  }
]

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {data: dataList}
    this.cancelAttention = this.cancelAttention.bind(this)
  }

  cancelAttention (removeId) {
    let {data} = this.state
    let newData = data.filter(item => item.uid !== removeId)
    this.setState({data: newData})
  }

  render () {
    let {data} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.text}>react native实现元素横向滑动</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={[styles.scrollView, styles.horizontalScrollView]} >
        {
          [...data].map((item, index) => <CommendItem key={index} cancel={this.cancelAttention} {...item} {...this.props} rank={index} />)
        }
        </ScrollView>
      </View>
    )
  }
}
