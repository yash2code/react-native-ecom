import {FontIcons} from '../../assets/icons';
import * as Screens from '../../screens/index';
import _ from 'lodash';

export const MainRoutes = [
  {
    id: 'LoginMenu',
    title: 'Auth',
    icon: FontIcons.login,
    screen: Screens.LoginMenu,
    children: [
      {
        id: 'Login1',
        title: 'Login',
        screen: Screens.LoginV1,
        children: []
      },
      {
        id: 'SignUp',
        title: 'Sign Up',
        screen: Screens.SignUp,
        children: []
      },
      {
        id: 'password',
        title: 'Password Recovery',
        screen: Screens.PasswordRecovery,
        children: []
      },
    ]
  },
  {
    id: 'Store',
    title: 'Store',
    icon: FontIcons.store,
    screen: Screens.Articles1,
  },
  {
    id: 'Balance',
    title: 'Wallet',
    icon: FontIcons.balance,
    screen: Screens.Wallet,
  },
  {
    id: 'Transactions',
    title: 'Notifications',
    icon: FontIcons.payment,
    screen: Screens.Notifications,
  },
  {
    id: 'Rewards',
    title: 'Rewards',
    icon: FontIcons.reward,
    screen: Screens.LoginMenu,
  },
  {
    id: 'Settings',
    title: 'Settings',
    icon: FontIcons.setting,
    screen: Screens.Settings,
  },
  
];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'GridV1',
  title: 'Start',
  screen: Screens.GridV1,
  children: []
},);

export const MenuRoutes = menuRoutes;