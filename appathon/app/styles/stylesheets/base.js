import {fontMaker, colors} from '../resources'

const singlePadding = 15
const doublePadding = singlePadding * 2
const singleMargin = 15
const doubleMargin = singleMargin * 2
const halfMargin = 5


export default StyleSheet => StyleSheet.extend({
  application: StyleSheet.extend({
    statusBarStyle: 'light-content',

    style: {
      flex: 1
    }
  }),

  flex: {
    flex: 1
  },

  padding: {
    padding: 20
  },

  icon: {
    margin: 0,
    padding: 0
  },

  text: {
    ...fontMaker(),
    fontSize: 16,
    lineHeight: 22,
    color: colors.black,
    backgroundColor: colors.transparent
  },

  boldText: {
    fontWeight: 'bold'
  },

  highlightText: {
    color: colors.pink
  },

  halfMarginTop: {
    marginTop: halfMargin
  },

  singleMarginTop: {
    marginTop: singleMargin
  },

  doubleMarginTop: {
    marginTop: doubleMargin
  },

  halfMarginBottom: {
    marginBottom: halfMargin
  },

  singleMarginBottom: {
    marginBottom: singleMargin
  },

  doubleMarginBottom: {
    marginBottom: doubleMargin
  },

  halfMargin: {
    marginTop: halfMargin,
    marginBottom: halfMargin
  },

  singleMargin: {
    marginTop: singleMargin,
    marginBottom: singleMargin
  },

  doubleMargin: {
    marginTop: doubleMargin,
    marginBottom: doubleMargin
  },

  underlineRectangle: {
    height: 61,
    borderStyle: 'solid',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grey
  },

  singlePaddingBottom: {
    paddingBottom: singlePadding ,
  },

  singlePadding: {
    padding: singlePadding,
  },

  doublePaddingBottom: {
    paddingBottom: doublePadding,
  },

  alignCenter: {
    textAlign: "center",
  },

  doubleLineHeight: {
    lineHeight: 20,
  },

  whiteText: {
    color: colors.white,
  },

  doublePaddingRight: {
    paddingRight: 2 * singlePadding,
  }

})
