import React, {Component} from 'react'
import {View, Text} from 'react-native'

import {Avatar1} from './'
import StyleSheet from '../styles'

export default class UserListInWallet extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let user = this.props.user
    let display = this.props.display
    let  displayStyle = this.props.displayStyle

    return(
      <View style={[StyleSheet.walletScreen.UserListInWallet.container, displayStyle]}>
        {display && (
        <View style={[StyleSheet.walletScreen.UserListInWallet.dateContainer]}>
          <Text style={[StyleSheet.text, StyleSheet.walletScreen.UserListInWallet.dateText]}>{this.props.displayDate}</Text>
        </View>
        )}
        <View style={StyleSheet.walletScreen.UserListInWallet.mainContentContainer}>
          <View style={StyleSheet.walletScreen.UserListInWallet.imageContainer}>
           <Avatar1 title={user.name} overlay={user.overlay} avatarStyle={StyleSheet.walletScreen.UserListInWallet.avatarStyle} />
          </View>
          <View style={StyleSheet.walletScreen.UserListInWallet.textContainer}>
            <Text style={[StyleSheet.text, StyleSheet.walletScreen.UserListInWallet.textStyle]} numberOfLines={1} ellipsizeMode="tail">
              {user.name + ' ' + user.secondName}
            </Text>
            <Text style={[StyleSheet.text, StyleSheet.walletScreen.UserListInWallet.activityTextStyle]} numberOfLines={1} ellipsizeMode="tail">
              {user.activity}
            </Text>
          </View>
          <View>
            <Text style={[StyleSheet.text, StyleSheet.walletScreen.UserListInWallet.price]}>+${user.price}</Text>
          </View>
        </View>
      </View>
    )
  }
}


