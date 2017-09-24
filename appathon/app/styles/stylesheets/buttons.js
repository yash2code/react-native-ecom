import {Platform, Dimensions} from 'react-native'
import {colors} from '../resources'

export default StyleSheet => StyleSheet.extend({

  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  separator: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    marginLeft: 35,
    marginRight: 35,
    borderStyle: 'solid',
    borderLeftWidth: 1,
    borderLeftColor: colors.grey
  },

  default: StyleSheet.extend({
    style: {
      flex: 1,
      backgroundColor: colors.black,
      alignItems: 'center',
      justifyContent: 'center'
    },

    containerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },

    iconStyle: {

    },

    textStyle: {
      letterSpacing: 1,
      fontWeight: 'bold',
      fontSize: 13,
      lineHeight: 13,
      color: colors.white,
      margin: 0,
      padding: 0
    },

    activeTextStyle: {

    },

    activeOpacity: 1.0,
    underlayColor: colors.highlightBlack,
    textTransform: s => s.toUpperCase()
  }),

  rounded: StyleSheet.extend({
    underlayColor: colors.highlightBlack,

    style: {
      borderRadius: 22,
      flex: 0
    },

    containerStyle: {
      height: 44
    }
  }),

  roundedDefault: StyleSheet.extend({
    underlayColor: colors.highlightPink,

    style: {
      backgroundColor: colors.green,
      borderRadius: 22,
      flex: 0
    },

    containerStyle: {
      height: 44
    }
  }),

  title: StyleSheet.extend({
    underlayColor: colors.transparent,

    style: {
      alignSelf: 'flex-start',
      backgroundColor: colors.transparent,
      flex: 0,
      width: null,
      height: null,
      paddingTop: 14,
      paddingBottom: 10,
      paddingLeft: 5,
      paddingRight: 5
    }
  }),

  modeSwitch: StyleSheet.extend({
    underlayColor: colors.highlightPink,

    style: {
      borderRadius: 14,
      backgroundColor: colors.blue,
      alignItems: 'center',
      justifyContent: 'center',
      height: 24,
      width: Platform.OS === 'ios' ? 145 : 155,
      flex: 0,
      paddingBottom: Platform.OS === 'ios' ? 0 : 2,
      paddingTop:  Platform.OS === 'ios' ? 2 : 0,
    },

    textStyle: {
      letterSpacing: 0,
    }

  }),

  headerAction: StyleSheet.extend({
    underlayColor: colors.grey,

    style: {
      position: 'absolute',
      top: -14,
      right: 15.5,
      width: 28,
      height: 28,
      alignItems: 'center',
      justifyContent: 'center'
    },
  }),

  headerActionCircle: StyleSheet.extend({
    underlayColor: colors.grey,

    style: {
      position: 'absolute',
      top: -14,
      right: 15.5,
      width: 28,
      height: 28,
      borderRadius: 14,
      borderColor: colors.white,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  }),

  alertDefault: StyleSheet.extend({
    underlayColor: colors.lightGrey,

    style: {
      backgroundColor: colors.transparent,
      borderStyle: 'solid',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: colors.grey,
      height: 45
    },

    textStyle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: colors.pink,
    }
  }),

  listItem: StyleSheet.extend({
    underlayColor: colors.lightGrey,

    style: {
      backgroundColor: colors.transparent,
      flex: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',

      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: colors.grey,
      borderRadius: 0,
      height: 50
    },

    textStyle: {
      color: colors.black,
      fontWeight: '400',
      letterSpacing: 0,
      fontSize: 16,
    },

    textTransform: s => s
  }),
})
