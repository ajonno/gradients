import React from 'react';
import { View, Platform } from 'react-native';

import { GlobalLayout } from '../StylesCommon';

const Card = ( props ) => {

    return (
        <View
           style={[ styles.containerStyle, props.style, ]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        ...Platform.select({
            android: {
                elevation: 3
            }
        }), //droid only
        //backgroundColor: 'red',
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 0,
        borderRadius: GlobalLayout.BORDER_RADIUS,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        shadowOffset: {
            height: 0,
            width: 0
        },
    }
};

export { Card };
