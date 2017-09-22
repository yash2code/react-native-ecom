import React from 'react'
import Octicon from 'react-native-vector-icons/Octicons'
import Icon from 'react-native-vector-icons/FontAwesome'
import MIcon from 'react-native-vector-icons/MaterialIcons'
import {
  RkTheme
} from 'react-native-ui-kitten'

export const FontIcons = {
    login: <Octicon name="lock" size={30} color="#900" />,
    store: <MIcon name="local-grocery-store" size={30} color="#900" />,
    balance: <MIcon name="account-balance-wallet" size={30} color="#900" />,
    payment: <MIcon name="payment" size={30} color="#900" />,
    reward: <MIcon name="grade" size={30} color="#900" />,
    setting: <MIcon name="settings" size={30} color="#900" />,
    mobile: '',
    other: '',
    theme: '',
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
    chevronRight: <Icon name="chevron-right" size={30} color="#000" />,
    chevronLeft: <Icon name="chevron-left" size={30} color="#000" />,
    bars: <Icon name="bars" size={30} color="#000" />,
    slashEye: <Icon name="eye-slash" size={30} color="#000" />,
    github: String.fromCharCode(61595),
  };