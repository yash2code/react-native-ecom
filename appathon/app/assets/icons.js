import React from 'react'
import Octicon from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  RkTheme
} from 'react-native-ui-kitten'

export const FontIcons = {
    login: <Octicon name="lock" size={30} color="#0099CC" />,
    store: <MIcon name="local-grocery-store" size={30} color="#0099CC" />,
    balance: <MIcon name="account-balance-wallet" size={30} color="#0099CC" />,
    payment: <MIcon name="notifications-active" size={30} color="#0099CC" />,
    reward: <MIcon name="grade" size={30} color="#0099CC" />,
    setting: <MIcon name="settings" size={30} color="#0099CC" />,
    mobile: '',
    other: '',
    theme: <MCIcon name="theme-light-dark" size={30} color="#0099CC" />,
    card: '',
    addToCardForm: '',
  };
  
  export const FontAwesome = {
    heart: <Icon name="heart" size={20} color="red" />,
    comment: <Icon name="dollar" size={20} />,
    user: <Icon name="star-o" size={20} />,
    twitter: <Icon name="twitter" size={30} color={RkTheme.current.colors.twitter} />,
    google: <Icon name="google" size={30} color={RkTheme.current.colors.google} />,
    facebook: <Icon name="facebook" size={30} color={RkTheme.current.colors.facebook} />,
    plus: String.fromCharCode(61543),
    search: String.fromCharCode(61442),
    smile: String.fromCharCode(61720),
    chevronRight: <Icon name="chevron-right" size={15} color="#CCCCFF" />,
    chevronLeft: <Icon name="chevron-left" size={15} color="#CCCCFF" />,
    bars: <Icon name="bars" size={15} color="#CCCCFF" />,
    slashEye: <Icon name="eye-slash" size={30} color="#CCCCFF" />,
    github: String.fromCharCode(61595),
  };