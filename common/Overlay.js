/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Overlay = ({ opacity }) => {
  return (
    <View style={{
        opacity: (opacity) || 0.25, 
        position: 'absolute', 
        backgroundColor: 'grey', 
        top: 0, 
        left:0,
        bottom:0,
        right:0
      }}
  //    blurRadius={1}
    >
    </View>
  )

};

export { Overlay };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     opacity: 0.3,
//     backgroundColor: '#000000'
//   },
// });
