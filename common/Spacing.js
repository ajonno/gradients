/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const Spacing = ({height, width}) => (
   <View style={{
      height: (height ? height : 0),
      marginLeft: (width ? width : 0)
   }}>
   </View>
);

export { Spacing };
