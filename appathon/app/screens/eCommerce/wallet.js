import React from 'react'
import {View} from 'react-native'

import WalletScreen from '../windows/wallet-screen'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let now = new Date()

export default class Wallet extends React.Component {
    constructor(props){
        super(props)
    }
     //to be replaced/removed as this funcion just creating fake users data for testing
  createFakeUsers() {
      
    let users = []
    let price, randomNumber

    for ( let i = 0;  i < 4;  i++) {
      price = Math.floor((Math.random() * 1000) + 1)
      let userX = {
        id: i,
        name: 'Helen',
        secondName: 'Gilbert',
        activity: 'Mobile',
        price: price,
        imageSrc: 'https://facebook.github.io/react/img/logo_og.png',
        overlay: null,
        date: months[now.getMonth()].toUpperCase() + ' ' + (now.getDay()) + ', ' + now.getFullYear(),
      }
      users.push(userX)
    }
    for ( let i = 4;  i <= 20;  i++) {

      price = Math.floor((Math.random() * 1000) + 1)
      randomNumber = Math.floor((Math.random() * 3) + 1)

      let user = {
        id: i,
        name: 'Helen',
        secondName: 'Gilbert',
        activity: 'Mobile',
        price: price,
        overlay:  randomNumber === 1 ? 'pending' : randomNumber === 2 ? 'cancelled' : null,
        imageSrc: 'https://facebook.github.io/react/img/logo_og.png',
        date: months[now.getMonth()].toUpperCase() + ' ' + (now.getDay() + i) + ', ' + now.getFullYear(),
      }
      users.push(user)
    }
    return users
  }

    render(){
        return(
            <View style={{flex: 1}}>
                <WalletScreen 
                navigate={this.props.navigation}
                users={this.createFakeUsers()}/>
            </View>
        )
    }
}  