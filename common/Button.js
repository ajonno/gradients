import React from 'react';
import {
   View,
   Image,
   Text,
   TouchableOpacity,
   StyleSheet,
   Platform,
   TouchableNativeFeedback,
} from 'react-native';
import APSLButton from 'apsl-react-native-button';
import LinearGradient from 'react-native-linear-gradient';
import renderIf from '../utils/renderIf';

import { stylesCommon, GlobalLayout } from '../StylesCommon';


// pure component
const Button = ({
   lightButton,
   greenButton,
   rightDropdownImage,
   onPress,
   isDisabled,
   title,
   leftIcon,
   children
}) => {

   return (
      <APSLButton
         isDisabled={isDisabled}
         activeOpacity={0.45}
         background={ (Platform.OS === 'ios') ? null : TouchableNativeFeedback.Ripple('blue')}
         style={[
            styles.button,
            styles.shadow,
            greenButton && styles.greenBackground
         ]}
         textStyle={[
            styles.title,
            greenButton && {color: '#FFFFFF'},
         ]}
         disabledStyle={{
            opacity: lightButton ? 0.5 : 0.3
         }}
         onPress={onPress}
      >
         {renderIf(children,
            children
         )}

         {renderIf(!children,

            <LinearGradient
               start={
                  {x: 0, y: 0}
               }
               end={
                  greenButton && {x: 1, y: 0.2} ||
                  lightButton && {x: 1, y: 1}
               }
               locations={
                  greenButton && [0.45,0.88] ||
                  lightButton && [0,1]
               }
               colors={
                  greenButton && ['#00D3CB', '#41EABB'] ||
                  lightButton && ['#FFFFFF', '#FFFFFF'] ||
                  ['#2A2A2A', '#2A2A2A']
               }
              style={[styles.linearGradient,
                {
                   flexDirection:'row',
                   alignItems: 'center',
                   justifyContent: 'center',
                }]}>

              {renderIf(lightButton,
                <Image
                   style={{justifyContent: 'center'}}
                  //  source={require('../images/Plus_blue.png')}
                  source={leftIcon}
                />
             )}

               <Text style={[
                styles.title,
                greenButton && {color: '#FFFFFF'},
                lightButton && {paddingLeft: 10, fontSize: 13},
               ]}>
                  {title}
               </Text>

            </LinearGradient>


         )}


      {/* <View style={{flexDirection:'row'}}>
         {renderIf(lightButton,
            <Image
               style={{justifyContent: 'center'}}
               source={require('../images/Plus_blue.png')}
            />
         )}
         <Text style={[
            styles.title,
            greenButton && {color: '#FFFFFF'}
         ]}>
            {title}
         </Text>
      </View> */}


   </APSLButton>
  );
};

const styles = StyleSheet.create({
   button: {
      height: 50,
      backgroundColor: '#FFFFFF',
      marginLeft: GlobalLayout.MARGIN_LEFT,
      marginRight: GlobalLayout.MARGIN_RIGHT,
      borderRadius: 4,
      borderWidth: 0,
   },
   title: {
      paddingLeft: 0,
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 15, //12.5,//17,
      //fontWeight: 'normal',
      color: '#2FC4FF',
   },
   greenBackground: {
      backgroundColor: 'transparent'
   },
   linearGradient: {
   flex: 1,
     height: 50,
     borderRadius: 5
   },
   shadow: {
      ...Platform.select({
         android: {
            elevation: 3, //droid only
         },
      }),
      shadowColor: '#DEDCDE',//'#E8F0FA',
      shadowOpacity: 1,
      shadowRadius: 12,
      shadowOffset: {
         height: 2,
         width: 0
      }
   },
});


export { Button };
