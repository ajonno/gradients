/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';


const ActionFieldInput = ({
   style,
   placeholder,
   autoCorrect ,
   autoFocus,
   secureTextEntry,
   onChangeText,
value}) => {

  return (
    <TextInput
        {...this.props}
        style={[styles.textInputOverride, style]}
        underlineColorAndroid={'transparent'}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
        autoCorrect={autoCorrect}
        onChangeText={onChangeText}
        value={value}
    >
    </TextInput>
  );
}
export { ActionFieldInput };

const styles = StyleSheet.create({
   textInputOverride: {
      paddingLeft: 0,
      height: 40,
      width: 250
   },
});
 /*<TextInput
        style={[styles.textInputOverride, props.style]}
        underlineColorAndroid={'transparent'}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={props.autoCorrect}
        autoFocus={props.autoFocus}
        autoCorrect={props.autoCorrect}
        onChangeText={onChangeText}
        value={props.value}
    >
    </TextInput>*/
