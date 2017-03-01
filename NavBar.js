/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Platform
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const { height, width } = Dimensions.get('window'); //store in state

export default NavBar = ({colors, start, end, locations}) => {

      return (
         <LinearGradient
            colors={colors}
            start={start}
            end={end}
            locations={locations}
         >
            <Image
              style={[styles.navBackgroundImage]}
              source={require('./images/dots_header.png')}
              resizeMode={'cover'} />
         </LinearGradient>
      );
}



const styles = StyleSheet.create({
 navBackgroundImage: {
      top: 5,
      left: 0,
      right: 0,
      width: width,
      height: Platform.OS === 'ios' ? 64 : 65,
   },
});
