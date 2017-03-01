/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card, CardSection, InputCard, ActionFieldHeading, ActionFieldInput} from './common'

const EndXY = (props) => (
   <Card>
      <CardSection style={{
         flexDirection:'row',
         justifyContent: 'space-between',
         // alignItems: 'flex-start',

      }}>
         <View>
            <ActionFieldHeading>
               End X
            </ActionFieldHeading>
            <ActionFieldInput style={{
               backgroundColor: "lightgrey",
               borderRadius: 4,
               width: 80,
               fontSize: 22,
               }}
               autoCorrect={false}
               autoCapitalize="none"
               placeholder='0.7'
               onChangeText={props.onChangeEndX}
            />
         </View>
         <View>
            <ActionFieldHeading>
               End Y
            </ActionFieldHeading>
            <ActionFieldInput style={{
               backgroundColor: "lightgrey",
               borderRadius: 4,
               width: 80,
               fontSize: 22,
               }}
               autoCorrect={false}
               autoCapitalize="none"
               placeholder='1.1'
               onChangeText={props.onChangeEndY}
            />
         </View>


      </CardSection>
   </Card>


);

export default EndXY;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
