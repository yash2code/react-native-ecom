import {Platform} from 'react-native'

import {colors} from '../resources'

export default StyleSheet => StyleSheet.extend({

  accessoryBarStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    padding: 0,
  },

  style: {
    flex: 1
  },

  contentStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.window
  },

  titleBarStyle: {
    backgroundColor: colors.white,
    alignItems: 'stretch',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },

  logoBarStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    marginRight: 12,
    alignItems: 'center',
    height: 56,
  },

  logoStyle: {
    height: 40,
    width: 80,
    resizeMode: 'contain',
    marginRight: 12,
  },

  crumbBar: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
    paddingHorizontal: 4,
  },
  crumbTextStyle: {
    color: colors.white,
    lineHeight: 17,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  
  noIconBackStyle: {
    justifyContent: 'center',
  },

  modeTextStyle: {
    color: colors.white,
    lineHeight: 12,
    fontSize: 12,
  },

  modeHighlightTextStyle: {
    fontWeight: 'bold'
  },

  titleStyle: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleTextStyle: {
    flex: 1,
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: 1
  },
})
