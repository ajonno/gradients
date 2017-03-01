import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window'); //store in state

export const primaryBackgroundColor = '#EDF4FC';

export const GlobalLayout = {
   MARGIN_LEFT: 15,
   MARGIN_RIGHT: 15,
   MARGIN_HORIZONTAL: 15,

   BORDER_RADIUS: 4,
   BORDER_RADIUS_HORIZONTAL: 4,
   BORDER_RADIUS_TOP_LEFT: 4,
   BORDER_RADIUS_TOP_RIGHT: 4,
   BORDER_RADIUS_BOTTOM_LEFT: 4,
   BORDER_RADIUS_BOTTOM_RIGHT: 4,

}

//module.exports = StyleSheet.create({
export const stylesCommon = StyleSheet.create({
   primaryBackground: {
      flex: 1,
      backgroundColor: primaryBackgroundColor
   },
   welcomeTitle: {
      // fontFamily: 'Montserrat-Regular',
      fontSize: 32,
      fontWeight: 'normal',
      color: '#383838',
   },
   welcomeSubTitle: {
      // fontFamily: 'Montserrat-Regular', //nb: Spruce has this as MEDIUM**
      fontSize: 18,
      fontWeight: 'normal',
      color: '#97BAD3',
   },
   textFieldLabel: {
      // fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      //fontWeight: 'normal',
      color: '#7EA5B4',
   },
   textField: {
      // fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      //fontWeight: 'normal',
      color: '#9B9B9B',
   },
   ctaLabel: {
      // fontFamily: 'Montserrat-Bold', //nb: Spruce has this as MEDIUM**
      fontSize: 14,
      fontWeight: 'normal',
      color: '#FFFFFF',
   },
   invitationText: {
      // fontFamily: 'Montserrat-Bold', //nb: Spruce has this as MEDIUM**
      fontSize: 14,
      fontWeight: 'normal',
      color: '#383838',
   },
   infoTitle: {
      // fontFamily: 'Montserrat-Regular',
      fontSize: 20,
      fontWeight: 'normal',
      color: '#FFFFFF',
   },
   headerSubTitle: {

   },
   headerLink: {
   },
   settingsTitle: {
      // fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      fontWeight: 'normal',
      color: '#383838',
   },
   cardTitle: {
      // fontFamily: 'Montserrat-Regular',
      fontSize: 18,
      //fontWeight: 'normal',
      color: '#383838',
   },
   cardSubtitle: {
      // fontFamily: 'Montserrat-Regular',
      fontSize: 13,
      fontWeight: 'normal',
      color: '#383838',
   },
   cardDisplayText: {
      // fontFamily: 'Montserrat-Light',
      fontSize: 17,
      color: '#383838',
      textAlign: 'center'
   },
   cardText: {
      // fontFamily: 'Montserrat-Regular',
      fontSize: 11,
      // fontWeight: 'normal',
      color: '#6E6E6E',
   },
   cardCTA: {
      // fontFamily: 'Montserrat-Regular',
      fontSize: 12,
      fontWeight: 'normal',
      color: '#7EA5B4',
   },
   overlayTitle: {
      color: '#FFFFFF',
      // fontFamily: 'Montserrat-Bold',
      fontSize: 14,
      fontWeight: 'bold',
   },
   overlayButton: {
      color: '#FFFFFF',
      // fontFamily: 'Montserrat-Medium',
      fontSize: 14,
      fontWeight: 'bold',
   },
   popoutOptionTitle: {

   },
   popoutOptionSubtitle: {
      color: '#D0DEE4',
      // fontFamily: 'Montserrat-Regular',
      fontSize: 12,
   },
   searchTextField: {

   },
   navBar: {
      elevation: 0,
      borderBottomWidth: 0
   },
   navBarLeftTitle: {
      // fontFamily: 'Montserrat-Light',
      fontSize: 24,
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0)',
      //paddingTop: (Platform.OS === 'android') ? 2 : 0
   },
   navBarSubTitle: {
      // fontFamily: 'Montserrat-Medium',
      fontSize: 10,
      fontWeight: 'normal',
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#2FC4FF',
   },
   navBackgroundImage: {
      top: 5,
      left: 0,
      right: 0,
      width: width,
      height: Platform.OS === 'ios' ? 64 : 65,
   },
    navBarTextPosition: {
      ...Platform.select({
         android: {
            paddingTop: 0, //droid only
         },
      }),
   },
   tourText: {

   },
   tourLink: {

   },
   gradedListSubtitle: {
      // fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      fontWeight: 'normal',
      color: '#2FC4FF',
   },
   tabBarTextActive: {
      // fontFamily: 'Montserrat-Medium',
      fontSize: 12,
      fontWeight: 'normal',
      color: '#2FC4FF',
   },
   dropdownListLinks: {

   },
   shadow: {
      ...Platform.select({
         android: {
            elevation: 3, //droid only
         },
      }),
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowOffset: {
         height: 3,
         width: 0
      }
   },
   shadowNone: {
      ...Platform.select({
         android: {
            elevation: 0, //droid only
         },
      }),
      shadowColor: 'transparent',
      shadowOpacity: 0,
      shadowRadius: 0,
      shadowOffset: {
         height: 0,
         width: 0
      }
   },
   separator: {
    //marginLeft: 15,
    //marginRight: 15,
    height: 2,
    backgroundColor: '#EFF0F0',
  },

});
