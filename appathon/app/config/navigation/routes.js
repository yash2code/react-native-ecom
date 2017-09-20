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
        title: 'Login V1',
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
  
];

let menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'GridV1',
  title: 'Start',
  screen: Screens.GridV1,
  children: []
},);

export const MenuRoutes = menuRoutes;