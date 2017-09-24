import React, {Component} from 'react'
import {View, Text} from 'react-native'

import StyleSheet from '../styles'
import Icon from './icon'

export default class BankInfoCard extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { name, surname, bankName, accountNumber, sortCode, balance} = this.props

    let firstCharOfName = name.charAt(0)
    let surnameCaption = surname.toUpperCase()
    let bankNameCaption = bankName.toUpperCase()
    return(
      <View elevation={5} style={[StyleSheet.walletScreen.bankInfoBox.container,{backgroundColor: 'black'}]}>
        <View style={[StyleSheet.walletScreen.bankInfoBox.top]}>
          <View style={[StyleSheet.walletScreen.bankInfoBox.detailsContainer,]}>
            <View style={[StyleSheet.walletScreen.bankInfoBox.nameContainer]}>
              <Text style={[StyleSheet.text, StyleSheet.walletScreen.bankInfoBox.name]}>{surnameCaption + ' ' + firstCharOfName}</Text>
            </View>
            <View style={[StyleSheet.walletScreen.bankInfoBox.bankDetails]}>
              <Text style={[StyleSheet.text, StyleSheet.walletScreen.bankInfoBox.bankDetailsText]}>{bankNameCaption + '   |   ' + accountNumber + '   |   ' +  sortCode}</Text>
            </View>
          </View>
          <View style={[StyleSheet.walletScreen.bankInfoBox.iconContainer]}>
            <View style={StyleSheet.walletScreen.bankInfoBox.iconCircle}>
                <Icon style={StyleSheet.walletScreen.bankInfoBox.iconStyle} name="icon"/>
            </View>
          </View>
        </View>
        <View style={[StyleSheet.walletScreen.bankInfoBox.bottom]}>
          <Text style={StyleSheet.walletScreen.bankInfoBox.balanceLabel}>Current Ballance</Text>
          <Text style={StyleSheet.walletScreen.bankInfoBox.balance}>${balance}</Text>
        </View>
      </View>
    )
  }
}

