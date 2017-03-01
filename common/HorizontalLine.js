/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const HorizontalLine = ({ height }) => (
  <View style={
   [
      styles.container,
      {
         height: (height ? height : 0.5)
      }
   ]
  } />
);

export { HorizontalLine };

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#EFF0F0',
    padding: 0,
    margin: 0
  },
});
