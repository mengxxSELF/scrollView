// 关注列表的推荐
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native'


let windowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: windowWidth / 3.5,
    margin: 10,
    flex: 1,
    alignItems: 'center',
    height: 150,
    borderColor: '#eef0f3',
    borderWidth: 1,
    position: 'relative'
  },
  wrap: {
    position: 'relative',
    width: 60,
    marginTop: 20,
    overflow: 'hidden'
  },
  imgWrap: {
    width: 60,
    borderRadius: 30,
    alignItems: 'center',
    height: 60
  },
  btn: {
    position: 'absolute',
    width: 10,
    height: 10,
    top: 0,
    right: 0
  },
  nameText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 10,
    marginBottom: 10
  }
})

export default class CommendItem extends Component {

  constructor (props) {
    super(props)
    this.pressBtn = this.pressBtn.bind(this)
    this.openLive = this.openLive.bind(this)
    this.openProfile = this.openProfile.bind(this)
  }

  openLive () {
    let {props} = this
    props.openLivePlay(props)
  }

  openProfile () {
    let {props} = this
    props.openUserPage(props)
  }

  // 点击取消的X按钮
  pressBtn () {
    let {uid} = this.props
    this.props.cancel(uid)
  }

  render () {
    let {uid} = this.props
    let {name, avatar} = this.props.anchor
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.btn} onPress={this.pressBtn}>
          <Text>X</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.wrap} onPress={this.openLive}>
          <Image resizeMode="stretch" style={styles.imgWrap} source={{url: avatar}} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} style={styles.info} onPress={this.openProfile}>
          <Text style={styles.nameText}>{name}{uid}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
