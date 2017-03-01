import React from 'react';
import { View } from 'react-native';

import { GlobalLayout } from '../StylesCommon';

const CardSection = (props) => {

  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
   borderRadius: GlobalLayout.BORDER_RADIUS,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  }
};

export { CardSection };
