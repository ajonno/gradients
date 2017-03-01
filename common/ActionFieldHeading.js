/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { stylesCommon } from '../StylesCommon';

const ActionFieldHeading = (props) => (
   <Text style={[
      stylesCommon.textFieldLabel, props.style]}
   >
      {props.children}
   </Text>
);

export { ActionFieldHeading };
