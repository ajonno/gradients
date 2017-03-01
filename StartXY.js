/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Card, CardSection, InputCard, ActionFieldHeading, ActionFieldInput} from './common'

const StartXY = (props) => (
   <Card>
      <CardSection style={{
         flexDirection:'row',
         justifyContent: 'space-between',
         // alignItems: 'flex-start',

      }}>
         <View>
            <ActionFieldHeading>
               Start X
            </ActionFieldHeading>
            <ActionFieldInput style={{
               backgroundColor: "lightgrey",
               borderRadius: 4,
               width: 80,
               fontSize: 22,
               }}
               autoCorrect={false}
               autoCapitalize="none"
               placeholder='0.1'
               onChangeText={props.onChangeStartX}
            />
         </View>
         <View>
            <ActionFieldHeading>
               Start Y
            </ActionFieldHeading>
            <ActionFieldInput style={{
               backgroundColor: "lightgrey",
               borderRadius: 4,
               width: 80,
               fontSize: 22,
               }}
               autoCorrect={false}
               autoCapitalize="none"
               placeholder='0.6'
               onChangeText={props.onChangeStartY}
            />
         </View>


      </CardSection>
   </Card>


);

export default StartXY;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
