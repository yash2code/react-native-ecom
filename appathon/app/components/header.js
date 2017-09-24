import React from 'react'
import {View, Image, Text} from 'react-native'


import StyleSheet from '../styles'
import {Button} from './button'
import {HighlightText} from './highlight-text'

export default class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            mode: 'Bank'    //options: Bank/User
        }
    }

    getMode() {
        if (this.state.mode === 'Buyer') {
            return {
                'modeText': 'Seller Mode',
                'modeTextHighlight': 'Buyer',
        }
        } else {
        return {
            'modeText': 'Buyer Mode',
            'modeTextHighlight': 'Seller',
        }
        }
    }

  render() {
    const {modeText, modeTextHighlight} = this.getMode()
    
    return (
      <View style={StyleSheet.window.titleBarStyle}>
        {!this.props.simple && (
          <View style={StyleSheet.window.logoBarStyle}>
            <Image source={StyleSheet.images.logo} style={StyleSheet.window.logoStyle} /> 
            <Image source={StyleSheet.images.logo2} style={StyleSheet.window.logoStyle} /> 
           
          </View>
        )}

      
      </View>
    )
  }
}

Header.propTypes = {
  'title': React.PropTypes.string,
  'simple': React.PropTypes.bool,
}


