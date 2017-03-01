import {
  StyleSheet,
  Platform,
  Dimensions,
} from 'react-native';

import Constants from '../../constants';

const { height, width } = Dimensions.get('window'); //store in state

export const button = StyleSheet.create({
   button: {
      backgroundColor: '#FFFFFF',
      marginLeft: 15,
      marginRight: 15,
      borderWidth: 0,
      marginTop: 10,
      marginBottom: 1,
      height: 50
   },
});
